const ejercicios = [
    { 
        id: "4.1", 
        titulo: "Determinar número mayor", 
        descripcion: "Crea un programa que solicite al usuario/a que introduzca dos números enteros y muestre por pantalla el mayor de los dos.",
        ruta: "Ejercicio4.1/index.html" 
    },
    { 
        id: "4.2", 
        titulo: "Nivel de experiencia", 
        descripcion: "Crea un programa que solicite al usuario/a que introduzca su nombre y el número de años que lleva trabajando en una empresa.",
        ruta: "Ejercicio4.2/index.html" 
    },
    { 
        id: "4.3", 
        titulo: "Palabras bonitas", 
        descripcion: "Haz un programa que pida una palabra ya que las más bonitas contienen 9 letras y empiezan por H, o contienen 5 letras y empiezan por P.",
        ruta: "Ejercicio4.3/index.html" 
    },
    { 
        id: "4.4", 
        titulo: "Convertir números a letras", 
        descripcion: "Crea un programa que pida al usuario/a que introduzca un número del 0 al 10 y muestre por pantalla su equivalente en letras.",
        ruta: "Ejercicio4.4/index.html" 
    },
    { 
        id: "4.5", 
        titulo: "Ejecutar operación seleccionada", 
        descripcion: "Haz un programa que pregunte al usuario/a dos números y un operador usando el control select de formulario.",
        ruta: "Ejercicio4.5/index.html" 
    },
    { 
        id: "4.6", 
        titulo: "Restaurante", 
        descripcion: "Crea un programa para un restaurante donde tienen tres platos y gestiona las preferencias o intolerancias alimentarias.",
        ruta: "Ejercicio4.6/index.html" 
    },
    { 
        id: "4.7", 
        titulo: "Múltiplos", 
        descripcion: "Haz un programa que pregunte al usuario/a dos números enteros que identificarás como dividendo y divisor respectivamente.",
        ruta: "Ejercicio4.7/index.html" 
    },
    { 
        id: "4.8", 
        titulo: "Juguemos Piedra, papel o tijera", 
        descripcion: "Escribe un programa que te permita jugar piedra, papel o tijera con el ordenador generando un número aleatorio.",
        ruta: "Ejercicio4.8/index.html" 
    }
];

const renderizarEjercicios = () => {
    const grid = document.getElementById('grid-ejercicios');
    
    grid.innerHTML = ejercicios.map(ej => `
        <a href="${ej.ruta}" class="group flex flex-col justify-between p-5 rounded-xl border border-slate-800 bg-slate-900/20 hover:border-cyan-500/40 hover:bg-slate-900/50 min-h-[180px] transition-all duration-200 hover:-translate-y-1 shadow-md">
            <div>
                <span class="text-xl font-black text-slate-6 group-hover:text-cyan-400 transition-colors duration-200 block mb-1">
                     ${ej.id} 
                </span>
                <span class="text-xs font-bold text-slate-200 tracking-wide uppercase block mb-2">
                    ${ej.titulo}
                </span>
                <p class="text-[11px] text-slate-400 leading-normal line-clamp-3 group-hover:text-slate-300 transition-colors">
                    ${ej.descripcion}
                </p>
            </div>
            <div class="text-[10px] text-cyan-400 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-3">
                Abrir ejercicio 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </a>
    `).join('');
};

document.addEventListener('DOMContentLoaded', renderizarEjercicios);
