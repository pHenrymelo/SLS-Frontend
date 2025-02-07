<template>
    <div class=" bg-blue-950 w-full h-full flex items-center">
        <div class=" p-6 mx-auto w-1/4 min-w-fit min-h-fit flex flex-col border-white border rounded-sm shadow-2xl">
            <div class=" text-white text-center  text-2xl font-bold my-4 text-shadow-blue">
                Bem vindo, <span class=" text-green-700">Jogador</span>
            </div>
            <div class=" flex gap-5 justify-center align-middle my-10">
                <router-link to="/quests">
                    <a href=""
                    class=" p-2 rounded-sm border border-white text-white shadow-lg text-shadow-blue">
                    Missões</a>
                </router-link>
                <router-link to="/infos">
                    <a href=""
                    class=" p-2 rounded-sm border border-white text-white shadow-lg text-shadow-blue">
                    Informações</a>
                </router-link>

            </div>
        </div>
    </div>
</template>
