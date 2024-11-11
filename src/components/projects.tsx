export function Projects() {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex items-center justify-center gap-4">
                <div className="flex">
                    <span className="font-medium text-purple text-3xl">#</span>
                    <h2 className="font-medium text-3xl text-white">Projetos</h2>
                </div>
                <div className="h-px w-full bg-purple" />
            </div>

            <div className="flex flex-col gap-4 border border-gray">
                <div className="flex flex-col">
                    <img src="../src/assets/projectExample.png" alt="" />
                    <div className="p-2 flex gap-2 text-gray">
                        <span>HTML</span>
                        <span>SCSS</span>
                        <span>PYTHON</span>
                        <span>FLASK</span>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="font-medium text-2xl text-white">ChertNodes</h2>
                        <span className="text-gray">Minecraft servers hosting</span>
                        <div className="flex gap-4">
                            <button className="px-4 p-2 flex items-center gap-2 text-white border">
                                Live {'<~>'}
                            </button>
                            <button className="px-4 p-2 flex items-center gap-2 text-white border">
                                Cached {'>='}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 border border-gray">
                <div className="flex flex-col">
                    <img src="../src/assets/protectx.png" alt="" />
                    <div className="p-2 flex gap-2 text-gray">
                        <span>React</span>
                        <span>Express</span>
                        <span>Discord.js</span>
                        <span>Node.js</span>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="font-medium text-2xl text-white">ProtectX</h2>
                        <span className="text-gray">Discord anti-crash bot</span>
                        <div className="flex gap-4">
                            <button className="px-4 p-2 flex items-center gap-2 text-white border">
                                Live {'<~>'}
                            </button>
                            <button className="px-4 p-2 flex items-center gap-2 text-white border">
                                Cached {'>='}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 border border-gray">
                <div className="flex flex-col">
                    <img src="../src/assets/kahoot.png" alt="" />
                    <div className="p-2 flex gap-2 text-gray">
                        <span>CSS</span>
                        <span>Express</span>
                        <span>Node.js</span>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h2 className="font-medium text-2xl text-white">Kahoot Answers Viewer</h2>
                        <span className="text-gray">Get answers to your kahoot quiz</span>
                        <div className="flex gap-4">
                            <button className="px-4 p-2 flex items-center gap-2 text-white border">
                                Live {'<~>'}
                            </button>
                            <button className="px-4 p-2 flex items-center gap-2 text-white border">
                                Cached {'>='}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}