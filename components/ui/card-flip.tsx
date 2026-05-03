'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';

function CardFlip({
  className,
  children,
  isFlipped,
  onFlipChange,
  showButtons = true,
  ...props
}: React.ComponentProps<'div'> & {
  children: [React.ReactNode, React.ReactNode];
  isFlipped?: boolean;
  onFlipChange?: (isFlipped: boolean) => void;
  showButtons?: boolean;
}) {
  const [internalIsFlipped, setInternalIsFlipped] = useState(false);
  const [front, back] = React.Children.toArray(children).filter(React.isValidElement);
  const flipped = isFlipped ?? internalIsFlipped;

  const setIsFlipped = (next: boolean) => {
    if (isFlipped === undefined) {
      setInternalIsFlipped(next);
    }
    onFlipChange?.(next);
  };

  return (
    <div
      className={cn('relative w-full', className)}
      style={{ perspective: '1000px' }}
      {...props}
    >
      <motion.div
        className='relative w-full'
        initial={false}
        animate={{ rotateY: flipped ? -180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className='w-full'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className='relative w-full'>
            {showButtons ? (
              <button
                onClick={() => setIsFlipped(true)}
                className='absolute top-4 right-4 p-2 rounded-full hover:bg-oklch(0.97 0.001 106.424) transition-colors z-10 dark:hover:bg-oklch(0.268 0.007 34.298)'
                aria-label='Show info'
                style={{
                  opacity: flipped ? 0 : 1,
                  pointerEvents: flipped ? 'none' : 'auto',
                  transition: 'opacity 0.3s',
                }}
              >
                <Info className='w-5 h-5 text-oklch(0.553 0.013 58.071) dark:text-oklch(0.709 0.01 56.259)' />
              </button>
            ) : null}
            {front}
          </div>
        </div>

        <div
          className='absolute inset-0 w-full'
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(-180deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className='relative w-full h-full'>
            {showButtons ? (
              <button
                onClick={() => setIsFlipped(false)}
                className='absolute top-4 right-4 p-2 rounded-full hover:bg-oklch(0.97 0.001 106.424) transition-colors z-10 dark:hover:bg-oklch(0.268 0.007 34.298)'
                aria-label='Close'
                style={{
                  opacity: flipped ? 1 : 0,
                  pointerEvents: flipped ? 'auto' : 'none',
                  transition: 'opacity 0.3s',
                }}
              >
                <X className='w-5 h-5 text-oklch(0.553 0.013 58.071) dark:text-oklch(0.709 0.01 56.259)' />
              </button>
            ) : null}
            {back}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CardFlipFront({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card'
      className={cn(
        'bg-oklch(1 0 0) text-oklch(0.147 0.004 49.25) flex flex-col gap-6 rounded-xl border border-oklch(0.923 0.003 48.717) py-6 shadow-xs dark:bg-oklch(0.216 0.006 56.043) dark:text-oklch(0.985 0.001 106.423) dark:border-oklch(1 0 0 / 10%)',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipBack({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card'
      className={cn(
        'bg-oklch(1 0 0) text-oklch(0.147 0.004 49.25) flex flex-col gap-6 rounded-xl border border-oklch(0.923 0.003 48.717) py-6 shadow-xs dark:bg-oklch(0.216 0.006 56.043) dark:text-oklch(0.985 0.001 106.423) dark:border-oklch(1 0 0 / 10%)',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-header'
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-title'
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  );
}

function CardFlipDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-description'
      className={cn('text-oklch(0.553 0.013 58.071) text-sm dark:text-oklch(0.709 0.01 56.259)', className)}
      {...props}
    />
  );
}

function CardFlipAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-action'
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  );
}

function CardFlipContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-content'
      className={cn('px-6', className)}
      {...props}
    />
  );
}

function CardFlipFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-footer'
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  );
}

export {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
  CardFlipHeader,
  CardFlipFooter,
  CardFlipTitle,
  CardFlipAction,
  CardFlipDescription,
  CardFlipContent,
};
