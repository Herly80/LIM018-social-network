// 1 ejemplo - una sola funcion para html y eventos
export const EjemploComponente = () => {
    const div = document.createElement('div');
    // modificas el html
    // agregas los  eventos necesarios

    return div;
};


// 2 ejemplo - una sola funcion para html y una funcion para eventos
export const Ejemplo2Componente = () => {
    const div = document.createElement('div');
    // modificas el html

    return div;
};
export const Ejemplo2ComponentEventos = () => {
    const div = document.querySelector('clase');
    // agregas los  eventos necesarios

};


// 3 ejemplo - una objeto con un atributo de funcion para html y otro funcion para eventos
export const Ejemplo4Component = {

    render: () => {
        const div = document.createElement('div');
        // modificas el html
    
        return div;
    },
    addEvents: () => {
        const div = document.querySelector('clase');
        // agregas los  eventos necesarios
    
    },
}