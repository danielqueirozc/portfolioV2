export function Home() {
    return (
        <main className="py-8 flex flex-col gap-6">
            <p className="text-3xl font-semibold p-3 text-white">
                Daniel é <span className="text-purple">Web Designer</span> e <span className="text-purple">Desenvolvedor Front-end</span>
            </p>
            <span className="text-gray">
                Ele cria sites responsivos onde a tecnologia encontra a criatividade
            </span>
           <div>
                <img src="../src/assets/home.png" alt="" />
                <div className="flex p-2 gap-[10px] items-center justify-center">
                    <div className="w-4 h-4 bg-purple" />
                    <div className="flex-1 flex flex-col">
                        <span className="text-gray font-medium">Atualmente trabalhando no </span>
                        <span className="text-white font-bold">Portfólio</span>
                    </div>
                </div>
           </div>
        </main>
    );
}