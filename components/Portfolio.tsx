const projects = [
    {
        id: 1,
        title: "Maniacos Skim Contest",
        description: "Landing page para torneo de skimboard y panel de administración completo. Sistema de gestión de competidores, productos de merchandising, generador automático de heats con visualización de resultados en tiempo real y control de avance de rondas desde el panel administrativo.",
        tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
        year: "2025",
        link: "https://maniacos-skim.vercel.app/",
        features: [
            "Landing page responsive",
            "Panel de administración",
            "Gestión de competidores",
            "Control de merchandising",
            "Generador automático de heats",
            "Resultados en tiempo real",
            "Sistema de avance de rondas"
        ]
    }
];

export default function Portfolio() {
    return (
        <section className="relative w-full bg-black px-4 py-32">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-light text-gray-200 mb-3">
                        Proyectos
                    </h2>
                    <div className="w-12 h-px bg-gray-700 mx-auto" />
                </div>
                <div className="max-w-3xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative border border-gray-800 p-10 md:p-12 transition-all duration-300 hover:border-gray-600"
                        >
                            <div className="space-y-6">
                                <div className="flex items-start md:items-center justify-between gap-4">
                                    <h3 className="text-2xl md:text-3xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs text-gray-600 shrink-0">
                                        {project.year}
                                    </span>
                                </div>

                                <p className="text-base text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="pt-4">
                                    <h4 className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Características</h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-gray-500 flex items-center gap-2"
                                            >
                                                <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs text-gray-600 border border-gray-800 px-3 py-1"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <div className="pt-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            <span>Ver proyecto</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="absolute bottom-0 left-0 w-0 h-px bg-gray-600 group-hover:w-full transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
