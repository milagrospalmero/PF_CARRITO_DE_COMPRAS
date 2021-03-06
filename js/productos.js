const productos = [
    {id:1, nombre:"ZAPATO FRANCÉS MARRON 4002 - 38 AL 46 (A PEDIDO)", descripcion:" Sistema de bóveda ovoidal acanalada de deformación programada. Redirige la carga en el taco hacia 4 puntos de apoyo específicos distribuyéndola uniformemente.Forro de doble capa Tejido textil en contacto con el pie y manto no tejido como soporte. Confort y durabilidad.Efectiva protección antimicrobiana. Previene el desarrollo de microorganismos y malos olores. NUMERACIÓN Del 34 al 49",  imagen:"../images/ZAPATO_FRANCESMARRON.png", precio:12269},
    {id:2, nombre:"ZAPATILLA NEGRA 'CROSS' DEL 36 AL 46", descripcion:"Inserto de TPU Alta Densidad en zona de SHOCK ABSORBER. Incrementa notablemente la resistencia a la abrasión y el grip. Incremento progresivo de la densidad.Elevado confort, óptima amortiguación en la zona del talón y máxima estabilidad en el paso. Sistema de bóveda ovoidal acanalada de deformación programada. Redirige la carga en el taco hacia 4 puntos de apoyo específicos distribuyéndola uniformemente. Textil doble frontura tipo honeycomb (nido de abeja), de alta ventilación y resistencia. Forro de doble capa Tejido textil en contacto con el pie y manto no tejido como soporte. Confort y durabilidad. Efectiva protección antimicrobiana. Previene el desarrollo de microorganismos y malos olores. Interiores sin soporte de espumas sintéticas. Disminuye humedad, eleva confort.", imagen:"../images/ZAPATILLA_NEGRA_CROSS.png", precio:12646},
    {id:3, nombre:"BOTÍN TERRA BEIGE TALLES DEL 36 AL 46 (A PEDIDO)", descripcion:"Incremento progresivo de la densidad.Elevado confort, óptima amortiguación en la zona del talón y máxima estabilidad en el paso.  Sistema de doble inserto de TPU Alta Densidad que incrementa notablemente la resistencia a la abrasión y el grip. Inserto de TPU Semi-Rígido de altísima densidad. Controla las torsiones indeseadas y protege el arco del pie. Sistema de bóveda ovoidal acanalada de deformación programada. Redirige la carga en el taco hacia 4 puntos de apoyo específicos distribuyéndola uniformemente. Incorporación de materiales altamente reflectivos de máxima visibilidad. Textil de alta resistencia a la abrasión y flexión. Forro de doble capa Tejido textil en contacto con el pie y manto no tejido como soporte. Confort y durabilidad. Forro de alta tecnología, de triple capa con cámara de aire de flujo permanente. Efectiva protección antimicrobiana. Previene el desarrollo de microorganismos y malos olores. Interiores sin soporte de espumas sintéticas. Disminuye humedad, eleva confort.",  imagen:"../images/BOTIN_TERRA.PNG", precio:20746},
    {id:4, nombre:"BORCEGUI DIELÉCTRICO MARRON TALLES 38 A 47", descripcion:"Sistema de bóveda ovoidal acanalada de deformación programada. Redirige la carga en el taco hacia 4 puntos de apoyo específicos distribuyéndola uniformemente. Forro de doble capa Tejido textil en contacto con el pie y manto no tejido como soporte. Confort y durabilidad.    Efectiva protección antimicrobiana. Previene el desarrollo de microorganismos y malos olores.",  imagen:"../images/BORCEGUI_DIELECTRICO.JPG", precio:1758},
    {id:5, nombre:"CALEFACTOR DE EXTERIOR GAS GARRAFA JK-1008", descripcion:" Combustible: garrafa 10 KG; Calorías: 10000KCAL; Consumo: 450g-870g/h; Radio calefacción: 6 M; Incluye válvula de seguridad con sensor de caída; Color: blanco/acero inoxidable; Peso: 17.5 KG;  Garantía: 6 meses",  imagen:"../images/CALEFACTOR_EXTERIOR.JPG", precio:40584},
    {id:6, nombre:"CALEFACTOR PARA EXTERIOR 11180Kcal.", descripcion:" Tipo pirámide, Combustible gas; Calorías 10.000 cal; Consumo 450-870 g/h; Radio de calefacción 6 m; Color bronce; Peso neto 25 Kg; Garantía 2 años",  imagen:"../images/CALEFACTOR_EXTERIOR2.PNG", precio:63777},
    {id:7, nombre:"CALEFACTOR ESTUFA EXTERIOR SIMIL MIMBRE", descripcion:" CALEFACTOR DE EXTERIOR GAS GARRAFA ; Calorías 10.000 Kcal/H; Combustible Gas Garrafa 10 kg; Consumo 450-870 g/h ; Presión de la bomba 28 Kpa/4 Psi; Radio de calefacción 6 Mts; Color Estilo Mimbre; Peso 17,5 Kg; Garantía 2 Años",  imagen:"../images/calefactor_estufa.jpg", precio:52214},
    {id:8, nombre:"CALEFACTOR DE EXTERIOR GAS GARRAFA ACERO INOX", descripcion:" CALEFACTOR DE EXTERIOR GAS GARRAFA ; Calorías 10.000 Kcal/H; Combustible Gas Garrafa 10 kg; Consumo 450-870 g/h ; Presión de la bomba 28 Kpa/4 Psi; Radio de calefacción 6 Mts; Color Estilo Mimbre; Peso 17,5 Kg; Garantía 2 Años",  imagen:"../images/CALEFACTOR_ACEROINOX.JPG", precio:41552}
];
 
//operador avanzados
const [a, b, c, d ,e , f , g , h] = productos;
console.log(a, b, d , g , h); 

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function verProducto(id) {
    localStorage.setItem("ver_producto", id);
    document.location = "ver-producto.html";
}



