var diaria = /** @class */ (function () {
    function diaria(qtdHoras, valorHoras, horaAdicional) {
        this.qtdHoras = qtdHoras;
        this.valorHoras = valorHoras;
        this.horaAdicional = horaAdicional;
    }
    diaria.prototype.total = function () {
        return (this.valorHoras + this.horaAdicional * (this.qtdHoras - 1));
    };
    return diaria;
}());
