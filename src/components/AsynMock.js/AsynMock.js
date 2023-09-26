const products = [{
        id: '1',
        name: 'Bicicleta Ghepard Rodado 29 Aluminio',
        price: 120000,
        category: 'adultos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_959481-MLA53072024987_122022-O.webp',
        stock: 8,
        description: ' Descripcion bici'
    },
    {
        id: '2',
        name: 'Bicicleta Mountain Bike Rodado 29 Fire Bird Dama',
        price: 240000,
        category: 'adultos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_958707-MLA69759692937_062023-O.webp',
        stock: 4,
        description:
        '- Cuadro de aluminio 6062\n' +
        '- Stem de aluminio\n' +
        '- Forma de Aluminio\n' +
        '- Caño de asiento aluminio\n' +
        '- Palancas de acero Fire Bird\n' +
        '- Plato 42-34-24 o 170mm\n' +
        '- Piñón a rosca relación 14-16-18-20-22-24-28\n' +
        '- Cambio Shimano Tz 400\n' +
        '- Manijas Shimano integrada\n' +
        '- Frenos a disco mecánico\n' +
        '- Horquilla con suspensión y bloqueo al tubo\n' +
        '- Ruedas con llantas doble pared\n' +
        '- Asiento acolchado\n' +
        '- Imagen ilustrativa. Los componentes varían según la partida\n' +
        '- Esta bicicleta es ideal para todo tipo de caminos, gracias a su sistema de cambios, sus cubiertas y su agilidad en el pedaleado.'
},
    {
        id: '3',
        name: 'Bicicleta Freestyle Haro Bmx Shredder Pro Dlx-rod 20 -works',
        price: 320000,
        category: 'bmx',
        img: 'https://http2.mlstatic.com/D_NQ_NP_858634-MLA48950051723_012022-O.webp',
        stock: 3,
        description: 'HARO SHREDDER PRO DLX (con rotor)\n'+
        'RODADO 20\n'+
        'CUADRO: Full Hi-Ten, tubo superior 20.3\n'+
        'HORQUILLA: Hi-Ten A-head 1 1/8“\n'+
        'TRANSMISIÓN: 25*9T\n'+
        'NEUMÁTICOS: Kenda Kontact 20- x 2,25\n'+
        'MAZAS: Trasera aluminio 36H con casette\n'+
        'PEDALES: Wellgo\n'+
        'FRENO: Trasero aluminio\n'+
        'CON ROTOR'
    },
    {
        id: '4',
        name: 'Bicicleta Freestyle Haro Bmx Shredder Pro Dlx-rod 20 -works',
        price: 516999,
        category: 'bmx',
        img: 'https://http2.mlstatic.com/D_NQ_NP_679183-MLA52004213737_102022-V.webp',
        stock: 2,
        description: 'Cuadro: Hi Ten Embryo, toptube, downtube y headtube Chromoly, con juego de dirección integrado.'+
        'Horquilla: Embryo full Chromoly.\n'+
        'Manubrio: Embryo 9” Chromoly.\n'+
        'Stem: top load Fiend Crown.\n'+
        'Puños: flangeless Fiend Team.'+
        'Palancas: Chromoly 3 piezas de 170mm con caja pedalera sellada Mid BB\n'+
        'Pedales: Mission Impulse Nylon.\n'+
        'Asiento/portasilla: Fiend Type B+ 1 pieza.\n'+
        'Llanta delantera: Mission Merlot.\n'+
        'Llanta trasera: Mission Mylar.'+
        'Maza delantera: Mission Echo 3/8” a rodamientos.\n'+
        'Maza trasera: Mission Dispatch freecoaster 9t.\n'+
        '25-9 gearing.\n'+
        'Cubiertas: 2.3".\n'+
        'Mission Cease rear brake and Captive lever and removable brake mounts.\n'+
        
        'Incluye 4 pegs con funda de plástico'
    },
    {
        id: '5',
        name: 'Bicicleta Bmx Fit Str ¡cromo! Street Profesional Negra',
        price: 627699,
        category: 'bmx',
        img: 'https://http2.mlstatic.com/D_NQ_NP_866997-MLA31087334482_062019-O.webp',
        stock: 3,
        description: 'FRAME'+
        'MATERIALCrMo HT, TT, and DT'+
        'TOP TUBE20'+
        'HEADTUBEIntegrated w/ Gyro holes'+
        'BB SHELLMID'+
        'DROP OUTS14mm'+
        'BRAKE MOUNTINGWelded 990'+
        'SEAT CLAMPAlloy Clamp'+
        
        'FORK'+
        'STEERER TUBECrMo (159mm)'+
        'LEGSStraight'+
        'DROP OUTS3/8'+
        'OFFSET33mm'+
        
        'STEERING'+
        'HANDLEBAR4 Piece 9” X 29”'+
        'STEMFIT Forged Front Load'+
        'GRIPSCrossFIT'+
        'HEADSETIntegrated 45°/45° Sealed 41.8MM'+
        
        'BRAKING'+
        'DETANGLERN/AREAR BRAKEAlloy 990 U-Brake'+
        'BRAKE LEVER2 Finger'+
        'BRAKE CABLESlic'+
        
        'SEATING'+
        'SEAT/POSTIntegrated Seat/Post Combo'+
        
        'DRIVETRAIN'+
        'FRONT/REAR25/9CRANKSTubular CrMo 170mm 8 Spline'+
        'BOTTOM BRACKETSealed Bearing MID'+
        'SPROCKETFIT Series One 25T'+
        'PEDALSWellgo Nylon'+
        'CHAINKMC Z410H'+
        
        'WHEELS'+
        'FRONT HUBAlloy 3/8¿ Axle'+
        'FRONT RIMRevenge S1W 36H'+
        'FRONT TIRE2.4 FIT T/A'+
        'REAR HUBAlloy Cassette 14mm Axle'+
        'REAR RIMRevenge S1W 36H'+
        'REAR TIRE2.4 FIT T/A'+
        'SPOKES14G'+
        'NIPPLESBrass'+
        
        'EXTRA'+
        'PEGS4x Steel'+
        'WEIGHT / 12.79 KG'+
        
        'COLOR(S)Matte Clear'+
        'Gloss Black'
        
    },
    {
        id: '6',
        name: 'Bicicleta Bmx Profesional Sunday Primer Freestyle ¡naranja!',
        price: 663199,
        category: 'bmx',
        img: 'https://http2.mlstatic.com/D_NQ_NP_767879-MLA42155177207_062020-O.webp',
        stock: 2,
        description: '-Maza trasera Sunday Driver 9t Rulemanes sellados, sistema Cassett\ne'+
        '-Stem Sunday Freeze\n'+
        '-Puños Sunday Cornerstone Grips\n'+
        '-Freno trasero profesional Odyssey Springfield\n'+
        '-Cubiertas Odyssey Path Pro Super anchas 2.40¿\n'+
        
        'ºBikecheck completo\n'+
        '-Cuadro: 20" TT, Hi-Ten, Integrated HT\n'+
        '-Horquilla: Hi-Ten 2pc Steerer w/ Welded Preload\n'+
        '-Manubrio: Alto de 9" OEM Hi-Ten\n'+
        '-Stem: Sunday 48mm Freeze\n'+
        '-Juego de dirección: FSA Integrated w/ 10mm Alloy Spacer\n'+
        '-Top bolt: M6 Preload w/ Alloy Cap\n'+
        '-Manija Freno: Odyssey Springfield\n'+
        '-Freno: Odyssey Springfield\n'+
        '-Cable de Freno: Odyssey Quik Slic\n'+
        '-Puños: Sunday Cornerstone\n'+
        '-Asiento: Sunday Badge 1-PC\n'+
        '-Poste de Asiento: Integrated\n'+
        '-Clamp: 28.6mm w/ Sunday Logo\n'+
        '-Plato: 25t Steel\n'+
        '-Palancas: 170mm Tubular 3-piece, Chromoly\n'+
        '-Caja: 19mm Sealed Mid\n'+
        '-Pedales: Wellgo w/o Logo\n'+
        '-Llantas: 20" P-7X 36H\n'+
        '-Maza delantera: Unsealed 3/8" 36H\n'+
        '-Maza trasera: Sealed 9t Driver, 36H\n'+
        '-Rayos: 14G Steel\n'+
        '-Cubiertas: Odyssey Path Pro OEM 20"x 2.40"\n'+
        '-Cadena: KMC Z410 BUBU\n'+
        
        'ºGeometria\n'+
        '-FRAME\n'+
        '-Top Tube: 20"\n'+
        '-Head Tube Angle: 75°\n'+
        '-Seat Tube Angle: 71°\n'+
        '-Chainstay Length: 13.25-13.5”\n'+
        '-Bottom Bracket Height: 11.5"\n'+
        '-Standover: 8.75"\n'+
        
        '-Manubrio\n'+
        '-Rise: 9"\n'+
        '-Width: 28.5"\n'+
        '-Backsweep: 12°\n'+
        '-Upsweep: 4°\n'+
        
        '-Peso: 11,33 Kg'
    },
    {
        id: '7',
        name: 'Bicicleta infantil TopMega Kids Princess R12 frenos v-brakes color rosa con ruedas de entrenamiento',
        price: 78331,
        category: 'niños',
        img: 'https://http2.mlstatic.com/D_NQ_NP_746937-MLA50136244426_052022-V.webp',
        stock: 5,
        description:'Su cuadro de acero soporta un mayor peso y posee una larga durabilidad.\n'+
        'Posee canasto para mayor comodidad.\n'+
        'Incluye ruedas de entrenamiento para la seguridad de los más chicos.\n'+
        'Guardabarro incluido.\n'+
        'Con portaequipaje.\n'+
        'Las imágenes pueden ser ilustrativas.\n'+
        'Material de la llanta: aluminio.'
    },
    {
        id: '8',
        name: 'Bicicleta Infantil Battle R12 Ørsted Aluminium Technology',
        price: 52799,
        category: 'niños',
        img: 'https://http2.mlstatic.com/D_NQ_NP_887078-MLA50451690604_062022-V.webp',
        stock: 7,
        description: '- CUADRO ØRSTED ALUMINIUM TECHNOLOGY - SL01, ALUMINIO SUPER LIVIANO BATTLE DESIGN, le da al niño niño confort en el uso reduciendo su esfuerzo al pedalera, evitando lesiones y al adulto responsable le otroga un fácil traslado.\n' +
        '- Incluye rueditas.\n' +
        '- Frenos V-brake, con manijas las cuales sus tamaños fueron diseñados exclusivamente para que los niños puedan frenar fácilmente.\n'+
        '- Llantas doble pared de aluminio, brindando mayor rigidez a la rueda.\n'+
        '- 1 velocidad.\n'+
        '- Protector de manubrio.\n'+
        '- Bicicleta equipada con cámara y cubierta para un andar suave y distinto a las bicis infantiles que tienen cubiertas macizas.\n'+
        
        'Edad sugerida: a partir de 3 años.\n'+
        'Peso: 8 Kg.',
    },
    {
    id: '9',
    name: 'Bicicleta Infantil Battle R12 Ørsted Aluminium Technology',
    price: 123900,
    category: 'niños',
    img: 'https://http2.mlstatic.com/D_NQ_NP_674359-MLA52374075626_112022-V.webp',
    stock: 4,
    description: 'Cuadro y horquilla de acero.\n'+
    'Ruedas inflables con llanta de rayos.\n'+
    'Frenos: Delantero V-Brake / Trasero: de cinta/ tambor.\n'+
    'Asiento acolchonado\n'+
    'Cubre cadena\n'+
    'Rueditas de entrenamiento.\n'+
    'Guardabarros de metal\n'+
    'Pedales de plástico\n'+
    'Timbre de campanita.\n'+
    'Canasto de plastico\n'+
    'carrier portaequipaje\n'+
    'Soporta 35kg'
},
{
    id: '10',
    name: 'Bicicleta De Nena Rodado 12 Top Mega Flexygirl R12 Infantil',
    price: 137891,
    category: 'niños',
    img: 'https://http2.mlstatic.com/D_NQ_NP_635878-MLA48416291561_122021-V.webp',
    stock: 3,
    description: '- CROSS 12 PRINCESS NENA\n'+
    '- Marca: Top Mega\n'+
    '- Rodado: 12\n'+
    '- Decoración de Manubrio\n'+
    '- Estabilizador Fijo 12\n'+
    '- Asiento acolchado Cross\n'+
    '- Cubre Cadena\n'+
    '- Guardabarros\n'+
    '- Frenos delantero y trasero V-Brake\n'+
    '- Rueda cross aluminio neumática\n'+
    '- Llantas de colores\n'+
    '- Rueditas estabilizadoras'
},{
    id: '11',
    name: 'Bicicleta infantil Raleigh MXR R12',
    price: 89145,
    category: 'niños',
    img: 'https://http2.mlstatic.com/D_NQ_NP_960305-MLA49542828549_042022-V.webp',
    stock: 5,
    description: 'Diseñada para niños, rodado 16 ideal para aprender\n'+
    'Ruedas de entrenamiento para mayor seguridad\n'+
    'Frenos Vbrakes delanteros y traseros eficientes\n'+
    'Cuadro resistente de acero y aluminio\n'+
    'Estilo atractivo en blanco y rojo\n'+
    'Marca Raleigh, calidad garantizada\n'+
    'Las imágenes pueden ser ilustrativas\n'
}







]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}