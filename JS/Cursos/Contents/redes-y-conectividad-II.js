import {
    Main_Function
} from "../main.js"

/* ####################################### HTML de los temas de Redes y Conectividad II de####################################### */

const HTMLforTopic_STP = `
<div class="style-for-content-for-topics-or-ev" id="unit1">
    <h1 class="principal-header">Protocolo de Arbol de Expansion (STP)</h1>
    <p class="text">
        La redundancia es escencial en el diseño de redes jerarquicas, permitiendo que los datos tengan rutas alternativas en caso de interrupciones.
        Pero esta redundancia puede generar bucles fisicos y logicos en redes Ethernet conmutadas, causando la retransmision continua de tramas hasta que se rompa el bucle, 
        esto es asi debido a que las tramas no cuentan con un campo de encabezado que limite su vida (como el encabezado "Time To Live" en los paquetes). <br>
        Para evitar la formacion de estos bucles en redes LAN Ethernet, se utiliza el Spanning Tree Protocol (STP).
    </p>
    <img class="image" src="https://2.bp.blogspot.com/-yqnbAw35Rw4/WhuinzE4R1I/AAAAAAAAF0A/TqtSx7PhqucbURcNsyKaTErKX_Oh73OUgCLcBGAs/w1200-h630-p-k-no-nu/Screen%2BShot%2B2017-11-27%2Bat%2B10.56.48%2BAM.png" alt="Spanning Tree Protocol">
    <ol class="ol-primary-topics">
        <li class="primary-li">
            <h2 class="primary-header">Spanning Tree Protocol (Protocolo de Arbol de Expansion)</h2>
            <p>
                Protocolo de red de capa 2 (capa de Enlace de Datos) que permite redundancia mientras crea una topologia de capa 2 sin bucles.
                El estandar original IEEE MAC Bridging para STP es el IEEE802.1D
            </p>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Bucle de Capa 2</h2>
            <p>
                Sin STP habilitado, los bucles de capa 2 pueden formarse provocando la reproduccion infinita de tramas de difusion, multidifusion y unidifusion desconocidas, esto puede provocar
                inestabilidad en la tabla de direcciones MAC, alta utilizacion de la CPU en el switch y afectacion a las tramas de unidifusion desconocidas los cuales se reenviaran como una difusion al desconocer la direccion MAC de destino,
                resultando en la llegada de tramas duplicadas al host de destino.
            </p>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Tormenta de Difusion (Tormenta de Broadcast)</h2>
            <p>
                Esta ocurre cuando un numero excesivo de emisiones satura la red, suele ser ocasionado por una NIC defectuosa o un bucle de capa 2. <br>
                Las multidifusiones de capa 2 se manejan de manera similar a las difusiones y, apesar de que los paquetes IPv6 no se reenvian como difusiones, existen protocolos como ICMPv6 Neighboor Discovery que usan multidifusiones. <br>
                Durante un bucle de capa 2 el conmutador pierde la capacidad de reenviar unidifusiones debido a los constantes cambios en la tabla de direcciones MAC, haciendo que las unidifusiones y difusiones se repitan en bucle, causando una tormenta de broadcast.
            </p>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">El Algoritmo de Arbol de Expansion (Spanning Tree Algorithm)</h2>
            <p>
                Spanning Tree Protocol esta basado en un algoritmo creado por <a class="link" href="https://es.wikipedia.org/wiki/Radia_Perlman">Radia Perlman</a> (1985), el cual elimina los bucles de capa 2, mediante la seleccion de un Puente Raiz (Root Bridge o simplemente Raiz)
                y determinando rutas con un menor costo desde el puente raiz hacia los demas conmutadores dentro del dominio de difusion. 
            </p>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Funcionamiento de Spanning Tree Protocol</h2>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Pasos para crear una topologia libre de bucles</h3>
                    <ol style="font-style: normal;font-weight: 600;font-size: clamp(12px , 16px , 18px);">
                        <li><p>Eleccion del puente raiz (Root Bridge).</p></li>
                        <li><p>Seleccion de los puertos raiz (Root Ports).</p></li>
                        <li><p>Eleccion de los puertos designados (Designed Ports).</p></li>
                        <li><p>Seleccion de los puertos alternativos (Alternative Ports).</p></li>
                    </ol>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Uso del BPDU (Bridge Protocol Data Unit)</h3>
                    <p>
                        El BPDU es usado por los conmutadores para compartir informacion sobre si mismos y sus conexiones con los demas. <br>
                        Ademas, el BPDU es escencial para determinar el Root Bridge , Root Ports , Designed Ports y Alternative Ports. <br>
                        Cada BPDU incluye una ID de puente (Bridge ID, BID) el cual consta de un valor de prioridad, ID de sistema extendido y direccion MAC del conmutador. Para STP el BID mas bajo es el preferido.
                    </p>
                    <img class="image" src="https://th.bing.com/th/id/R.a318c1eca7da0a84bca9f15b0356cc78?rik=VwhZyZTa5yAf3g&riu=http%3a%2f%2fwww.firewall.cx%2fimages%2fstories%2fstp-root-bridge-election-2.png&ehk=niopaMgxLpRR7Subi9YRYuTqtgbzRkfbSY2mmgd6jEM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Campos de BID">
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Prioridad de Puente en Switches Cisco</h4>
                            <p>
                                Se suele expresar en formato decimal y va de 0 a 61440 (en incrementos de 4096), siendo su valor por defecto de 32768, sirve para manipular la eleccion del Root Bridge.
                                La prioridad 0 es la mas alta y la que prevalece sobre los demas, mientras que la prioridad 61440 es la mas baja y puede excluir a un switch de la eleccion del Root Bridge.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">ID de Sistema Extendido</h4>
                            <p>
                                Se combina con la Prioridad en el BID formando el Bridge Priority, y permite identificar la VLAN a la que pertenece una BPDU. <br>
                                Originalmente no existia por la ausencia de la VLAN pero con su introduccion fue añadido. Su utilidad radica en que permite a versiones modernas de STP (como Rapid Spanning Tree Protocol [RSTP] y Peer Vlan Spanning Tree [PVST]) gestionar
                                multiples instancias de STP.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direccion MAC</h4>
                            <p>
                                Es la direccion MAC del conmutador, si el Bridge Priority es la misma en todos los swtiches dentro del dominio de difusion, entonces el switch con la direccion MAC mas baja 
                                tendra mayor prioridad sobre todos los demas, convirtiendose en el Root Bridge.
                            </p>
                        </li>
                    </ol>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Proceso de Operacion de Spanning Tree Protocol</h3>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Eleccion del Root Bridge</h4>
                            <p>
                                Al iniciarse la operacion de STP, cada switch envia tramas BPDU a los demas cada 2 segundo, estas tramas incluyen el Bridge ID del propio switch asi como 
                                el Bridge ID del Root Bridge (Root ID). Inicialmente, todos los switches se consideran a si mismos como el Root Bridge y teniendo su propia BID como Root ID.
                                Eventualmente, con el intercambio de los BPDU entre los switches, se logra identificar al switch con el BID mas bajo, convirtiendose este en el Root Bridge.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Determinacion del costo de ruta raiz</h4>
                            <p>
                                Spanning Tree Algorithm determina las mejores rutas hacia el Root Bridge desde todos los switches en el dominio de difusion. <br>
                                Esta ruta se calcula sumando los costos de los puertos individuales en la ruta desde el Root Bridge hasta el switch. <br>
                                El BPDU incluye el costo de la ruta raiz, cuando un switch recibe un BPDU, le añade el costo del puerto de entrada. <br>
                                El costo se basa en la velocidad de los puertos, la IEEE define estos costos, Cisco usa valores del estandar IEEE802.1D (costo de ruta corta) para STP y RSTP, y el estandar
                                IEEE802.1W (costo de ruta larga) para enlaces de 10 Gb/s y superiores.
                            </p>
                            <table>
                                <caption style="caption-side: top;">Tabla de costo para STP</caption>
                                <tr>
                                    <th>Velocidad de Enlace</th>
                                    <th>Costo STP IEEE802.1D - 1998</th>
                                    <th>Costo RSTP IEEE802.1W - 2004</th>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">10 GB/s</td>
                                    <td>2</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">1 GB/s</td>
                                    <td>4</td>
                                    <td>20000</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">100 MB/s</td>
                                    <td>19</td>
                                    <td>200000</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">10 MB/s</td>
                                    <td>1000</td>
                                    <td>2000000</td>
                                </tr>
                            </table>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Eleccion del Root Port</h4>
                            <p>
                                El Root Port es el puerto mas cercano al Root Bridge en terminos de costo de ruta raiz.
                                Las rutas con un costo de ruta raiz mas bajos son preferidos, mientras que las rutas redundantes se bloquean.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Eleccion de los Designed Ports</h4>
                            <p>
                                Si en un segmento entre 2 switches, uno de los puertos es un Root Port, entonces el otro sera siempre un Designed Port, debido a que este puerto tiene la mejor ruta para recibir trafico hacia el puente raiz. <br>
                                En el Root Bridge todos sus puertos son Designed Ports.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Eleccion de los Alternative Ports</h4>
                            <p>
                                Los puertos que no son Root Ports o Designed Ports se vuelven Alternative Ports (en estado de bloqueo).
                                Si en un segmento entre 2 switches, ninguno de los 2 puertos es un Root Port, entonces el switch con menor costo de ruta raiz o menor BID tendra el Designed Port, mientras que el otro, el Alternative Port.
                            </p>
                        </li>
                        <img class="image" src="https://4.bp.blogspot.com/-hkTCrv9hJCk/UA16LhEX_MI/AAAAAAAAAF0/F4BSjHsaZok/s1600/puertos1.png" alt="Operacion de STP">
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
</div>
`;

const HTMLforTopicIPv6Addressing = `
<div class="style-for-content-for-topics-or-ev" id="unit1">
    <h1 class="principal-header">Direccionamiento IPv6</h1>
    <ol class="ol-primary-topics">
        <li class="primary-li">
            <h2 class="primary-header">Escenario Actual del Direccionamiento en Internet</h2>
            <p>
                Debido al crecimiento de la Internet, era necesario reformular ciertas caracteristicas de IPv4, dando lugar a:
            </p>
            <ul class="primary-ul">
                <li>
                    <p>
                        <span class="header-in-ul">CIDR (Classless Inter-Domain Routing):</span> Introducido en 1993 por el IETF (Internet Engineering Task Force), sus especificaciones se encuentran en
                        el RFC 1519 y el RFC 4632.
                    </p>
                </li>
                <li>
                    <p>
                        <span class="header-in-ul">NAT (Network Address Translation):</span> Introducido en 1994 por el IETF, sus especificaciones se encuentran en el RFC 1631.
                    </p>
                </li>
                <li>
                    <p>
                        <span class="header-in-ul">Espacio de Direccionamiento Privado:</span> RFC 1918.
                    </p>
                </li>
                <li>
                    <p>
                        <span class="header-in-ul">DHCP (Dynamic Host Configuration Protocol)</span>
                    </p>
                </li>
            </ul>
            <p>
                A pesar de estos cambios, para el año 2001 el 50% de las direcciones estaban asignadas, llegando al 75% en el año 2005 . En la actualidad, la IANA (Internet Assigned Numbers Authority) no cuenta con direcciones IPv4 disponibles.
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Agotamiento de IPv4</h3>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Fecha de Agotamiento por Region (de acuerdo con el RIR)</h4>
                            <ul class="primary-ul">
                                <li>
                                    <p>
                                        <span class="header-in-ul">APNIC (Asia Pcific Network Information Centre):</span> <time datetime="2011-04-15">15 de abril de 2011</time>, ultimo prefijo /8 (255.0.0.0).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">RIPE NCC (Réseaux IP Européens Network Coordination Centre):</span> <time datetime="2021-09-14">14 de septiembre de 2021</time>, ultimo prefijo /8 (255.0.0.0).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">ARIN (American Registry for Internet Numbers):</span> <time datetime="2014-04-23">23 de abril de 2014</time>, ultimo prefiho /8 (255.0.0.0).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">LACNIC (Latin America and Caribbean Network Information Center):</span> <time datetime="2014-06-10">10 de junio de 2014</time>, ultimo bloque /10 (255.192.0.0). (Direcciones disponibles a marzo 2021: 2304)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">AFRINIC (African Network Information Centre):</span> Entro en la primera fase del agotamiento el <time datetime="2017-03-31">31 de marzo de 2017</time>, ultimo prefijo /8 (255.0.0.0). A pesar de contar con direcciones dentro de su pool asignado, el agotamiento esta proximo a ocurrir.
                                    </p>
                                </li>
                                <img class="image" src="https://www.apnic.net/wp-content/uploads/History%20of%20the%20Regional%20Internet%20Registries/images/RIR_Regions_map-01.png" alt="RIR">
                            </ul>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Agotamiento en LACNIC</h4>
                            <ul class="primary-ul">
                                <li>
                                    <p><span class="header-in-ul">Asignado a Proveedores (ISP):</span> 94%</p>
                                </li>
                                <li>
                                    <p><span class="header-in-ul">Asignado a Usuarios Finales:</span> 3.4%</p>
                                </li>
                                <li>
                                    <p><span class="header-in-ul">Reservado para Infraestructura Critica:</span> 2.3%</p>
                                </li>
                                <li>
                                    <p><span class="header-in-ul">Cuarentena</span> 2.2% , estos seran liberados de manera progresiva (en 2020 121000 direcciones)</p>
                                </li>
                                <li>
                                    <p><span class="header-in-ul">Preaprobado:</span> 0.2%</p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li class="secondary-li">
                    <h2 class="secondary-header">Llegada de IPv6</h2>
                    <p>
                        Las primeras especificaciones de IPv6 estan contenidas en el RFC 1883 (año 1995). <br>
                        Se actualizaron las epecificaciones en el RFC 2460 (año 1998). <br>
                        El <time datetime="2012-06-06T00:00:00z">6 de junio de 2012, 00:00 UTC</time> los principales sitios web, ISP y proveedores de contenido comenzaron a operar sobre IPv6.
                    </p>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">IPv6</h2>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Mejoras sobre IPv4</h3>
                    <ul class="primary-ul">
                        <li>
                            <p>Espacio de direccionamiento mas amplio, usa 128 bits en lugar de 32.</p>
                        </li>
                        <li>
                            <p>Reduce los campos de encabezado, de 12 campos en IPv4 a solamente 8 en IPv6.</p>
                        </li>
                        <li>
                            <p>Cabecera de longitud fija, de 20 bytes fijos mas 0-40 bytes variables en IPv4 a un encabezado de 40 bytes de longitud en IPv6.</p>
                        </li>
                    </ul>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Encabezado IPv6</h3>
                    <img class="image" src="https://adictec.com/wp-content/uploads/2017/08/Encabezado-de-paquetes-IPv6.png" alt="Encabezado de paquete IPv6">
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Extension de Cabezera</h3>
                    <p>
                        Permite añadir funcionalidades de forma paulatina o cuando se necesitan, se añaden entre la cabecera fija y la carga util. Exiten 8 tipos de cabecera de extension, algunos de estos son:
                    </p>
                    <ul class="primary-ul">
                        <li>
                            <p><span class="header-in-ul">Opciones de Salto (Hop-by-Hop Options):</span> Contiene datos que deben ser examinados por cada uno de los nodos a lo largo de la ruta de envio.</p>
                        </li>
                        <li>
                            <p><span class="header-in-ul">Enrutamiento (Routing):</span> Contiene metodos para especificar la forma de rutear un datagrama.</p>
                        </li>
                        <li>
                            <p><span class="header-in-ul">Fragmentacion (Fragment):</span> Contiene parametros para la fragmentacion de los datagramas.</p>
                        </li>
                        <li>
                            <p><span class="header-in-ul">Opciones de Destino (Destination Options):</span> Datos que solo necesitan ser examinadas por los nodos de destino.</p>
                        </li>
                        <li>
                            <p><span class="header-in-ul">Autenticacion (Authentication):</span> Contiene informacion para verificar la autenticacion de la mayor parte de los datos del paquete.</p>
                        </li>
                        <li>
                            <p><span class="header-in-ul">ESP (Encapsulation Security Payload):</span> Lleva la informacion cifrada para comunicacion segura.</p>
                        </li>
                        <img class="image" src="https://media.geeksforgeeks.org/wp-content/uploads/20200421154310/Ipv6-Fragmentation-Header1.png" alt="Encabezado de Extension">
                    </ul>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Notacion de Direccion IPv6</h2>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Formato de Direcciones IPv6</h3>
                    <ul class="primary-ul">
                        <li>
                            <p>Las direcciones IPv6 constan de 128 bits, los cuales se distribuyen en segmentos de 2 bytes (4 digitos hexadecimales, 16 bits) conocidos como hextetos.</p>
                        </li>
                        <li>
                            <p>Las direcciones IPv6 no distinguen entre mayusculas y minusculas, por ejemplo: 2001:CAFE:ACAD::/64 = 2001:cafe:acad::/64</p>
                        </li>
                        <li>
                            <p>
                                Las direcciones IPv6 se dividen en Prefijo de Enrutamiento (Identifica la red) e ID de Interfaz (Identifica a los hosts), la longitud del prefijo determina la cantidad de bits que identifican la red. 
                                Por ejemplo, en las siguientes direcciones: <br>
                                <span class="span-IP-address-text">2001:0DB8:0000:0000:0000:0000:0000:0000/32</span> (32 bits identifican la red y los 96 bits restantes, a los hosts) <br>
                                <span class="span-IP-address-text">2001:CAFE:ACA0:0000:0000:0000:0000:0000/44</span> (44 bits identifican la red y los 84 bits restantes, a los hosts) <br>
                                <br>
                                Ademas, se pueden tomar algunos bits a la derecha del Prefijo de Enrutamiento para Subneting, para realizar esto se recomienda tomar bits de 4 en 4. <br>
                                Por ejemplo, si quisiera que la siguiente direccion me alcance para 4 redes: <br>
                                <span class="span-IP-address-text">2001:ACAD:CAFE:0000:0000:0000:0000:0000/48</span> <br>
                                <br>
                                Tomaria 4 bits para hacer el Subneting, obteniendo asi las siguientes direcciones:<br>
                                <span class="span-IP-address-text">[1] 2001:ACAD:CAFE:0000:0000:0000:0000:0000/52</span> <br>
                                <span class="span-IP-address-text">[2] 2001:ACAD:CAFE:1000:0000:0000:0000:0000/52</span> <br>
                                <span class="span-IP-address-text">[3] 2001:ACAD:CAFE:2000:0000:0000:0000:0000/52</span> <br>
                                <span class="span-IP-address-text">......................</span> <br>
                                <span class="span-IP-address-text">[15] 2001:ACAD:CAFE:E000:0000:0000:0000:0000/52</span> <br>
                                <span class="span-IP-address-text">[16] 2001:ACAD:CAFE:F000:0000:0000:0000:0000/52</span> <br>
                                <br>
                                A pesar de que es posible usar cualquier longitud de prefijo, se recomienda usar el prefijo /64, para mantener la compatibilidad con protocolos de direccionamiento automatico como SLAAC (Stateless Addressing Autoconfiguration).
                            </p>
                        </li>
                        <li>
                            <p>
                                Al igual que con las direcciones IPv4, las direcciones IPv6 pueden usarse en una URL para visitar una web. <br>
                                La manera correcta de usar una direccion IPv6 en una URL es la siguiente: <br>
                                <span class="span-IP-address-text">http://[2001:B17:832A::A]:80</span>
                            </p>
                        </li>
                    </ul>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Resumir Direcciones IPv6</h3>
                    <p>
                        Las direcciones IPv6, al representarse con un amplio numero de caracteres hexadecimales, son dificiles de leer y escribir,
                        para facilitar esto, se aplican ciertas reglas para reducir el numero de caracteres en la direccion.
                    </p>
                    <ol class="ol-of-steps">
                        <li>
                            <p>Omitir todos los ceros a la izquierda de un segmento</p>
                        </li>
                        <li>
                            <p>
                                Resumir bloques enteros de ceros (0) usando "::", si en una direccion IPv6 se tiene mas de un bloque de ceros, entonces se resumira el bloque con la mayor cantidad de segmentos con ceros.
                                Esta regla solo puede aplicarse una vez por direccion.
                            </p>
                        </li>
                        <p>
                            Un ejemplo con la siguiente direccion: <br>
                            <span class="span-IP-address-text">1200:0000:0ABC:DEF0:0000:0000:0000:E0D6/64</span> <br>
                            <br>
                            Aplicamos la regla numero 1 <br>
                            <span class="span-IP-address-text">1200:0:ABC:DEF0:0:0:0:E0D6/64</span> <br>
                            <br>
                            Aplicamos la regla numero 2 <br>
                            <span class="span-IP-address-text">1200:0:ABC:DEF0::E0D6/64</span>
                        </p>
                    </ol>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Tipos de Direcciones en IPv6</h2>
            <img class="image" src="https://community.cisco.com/t5/image/serverpage/image-id/168970i6B93B63883825CC8?v=v2" alt="Tipos de Direcciones IPv6">
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Direcciones IPv6 Unicast</h3>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direcciones Globales (Global Unicast Address , GUA [RFC 3587])</h4>
                            <p>
                                Son usadas para trafico global, tienen una estructura jerarquica de 3 niveles
                            </p>
                            <img class="image" src="https://4sysops.com/wp-content/uploads/2011/03/IPv6.tutorial.Global.unicast.address.png" alt="Estructura de una GUA">
                            <p>
                                La longitud de cada porcion es arbitraria, pero generalmente se respetan los 64 bits del Routing Prefix (Global Routing Prefix + Subnet ID) y del Interface ID. <br>
                                En la actualidad, la IANA y los RIR estan asignando direcciones del rango <br>
                                <span class="span-IP-address-text">2000::/3</span>  ---   <span class="span-IP-address-text">3FFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF/3</span>
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direcciones Unique Local (ULA [RFC 4193])</h4>
                            <p>
                                Estas direcciones no son alcanzables globalmente, por lo que solo se pueden enrutaer dentro del alcance de las redes privadas. Se podria decir que se asemeja al espacio de direcciones privadas en IPv4. <br>
                                El bloque de direcciones de ULA es: <br>
                                <span class="span-IP-address-text">FC00::/7</span> --- <span class="span-IP-address-text">FDFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF/7</span> <br>
                                Tienen una parte de red pseudo-aleatoria de 40 bits, con una Subnet ID de 40 bits y una Interface ID de 64 bits. <br>
                                <br>
                                Ademas, dentro de la ULA 
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direcciones de Enlace Local (Link-Local Address , LLA [RFC 3513])</h4>
                            <p>
                                Permite la comunicacion entre dispositivos que estan en un mismo segmento de red, sin tener que usar otro tipo de direcciones. <br>
                                Su alcance esta limitado al enlace y no son reenviadas. <br>
                                Todas las interfaces que operan con IPv6 tienen una Direccion de Enlace Local. <br>
                                Los routers usan la Direccion de Enlace Local de un router vecino para enviar actualizaciones de enrutamiento, mientras que los hosts usan la LLA de un router o interfaz local como gateway. <br>
                                Las Direcciones de Enlace Local se generan con el bloque de direcciones: <br>
                                <span class="span-IP-address-text">FE80::/10</span> <br>
                                Con una ID de Interfaz de 64 bits. <br>
                                <br>
                                Para generar la Interface ID de una Direccion de Enlace Local de manera automatica, los dispositivos, tanto hosts como de red, usan 2 metodos:
                            </p>
                            <ol class="ol-cuaternary-topics">
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">Proceso Extended Unique Identifier (EUI-64 , [RFC 2373])</h5>
                                    <p>
                                        El proceso EUI-64 es muy usado por Cisco IOS, es exclusivo de IPv6 y se encarga de generar una ID de Interfaz basandose en la direccion MAC del dispositivo. <br>
                                        Por ejemplo, para un dispositivo con una direccion MAC: <span class="span-IP-address-text">AF:20:10:EF:A0:BA</span> se siguen los siguientes pasos:
                                        <ol class="ol-of-steps">
                                            <li>
                                                <p>
                                                    Del bloque de direcciones <span class="span-IP-address-text">FE80::/10</span>, definimos los primeros 64 bits como nuestro prefijo de red en vez de 10. 
                                                    Asi tendremos FE80::/64
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Tomamos la direccion MAC de nuestro dispositivo: <br>
                                                    <span class="span-IP-address-text">AF:20:10:EF:A0:BA</span> <br>
                                                    <br>
                                                    En el medio introducimos FFFE <br>
                                                    <span class="span-IP-address-text">AF:20:10  FFFE  EF:A0:BA</span> <br>
                                                    <br>
                                                    Finalmente, invertimos el 7mo bit <br>
                                                    Original <span class="span-IP-address-text">AF:20:10  FFFE  EF:A0:BA</span> <br>
                                                    Binario <span class="span-IP-address-text">1010 1111 : 0010 0000 ...</span> <br>
                                                    7mo bit invertido <span class="span-IP-address-text">1010 1101 : 0010 0000 ...</span> <br>
                                                    Resultado <span class="span-IP-address-text">AD20:10FF:FEEF:A0BA</span> <br>
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Por ultimo, añadimos el resultado anterior como Interface ID a la direccion <span class="span-IP-address-text">FE80::/64</span> <br>
                                                    <span class="span-IP-address-text">FE80::AD20:10FF:FEEF:A0BA/64</span>
                                                </p>
                                            </li>
                                        </ol>
                                    </p>
                                </li>
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">Proceso de Generacion Aleatoria</h5>
                                    <p>

                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direcciones Reservadas</h4>
                            <ul class="primary-ul">
                                <li>
                                    <p><span class="header-in-ul">Direccion de Bucle Invertido (Loopback):</span> <span class="span-IP-address-text">::1/128</span></p>
                                </li>
                                <li>
                                    <p><span class="header-in-ul">Unespecified:</span> <span class="span-IP-address-text">::/128</span></p>
                                </li>
                                <li>
                                    <p><span class="header-in-ul">Documentacion:</span> <span class="span-IP-address-text">2001:DB8::/32</span></p>
                                </li>
                                <li>
                                    <p><span class="header-in-ul">Embedded IPv6:</span> <span class="span-IP-address-text">2002::/48</span></p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Direcciones IPv6 Multicast</h3>
                    <p>
                        Se encuentran dentro del bloque de direcciones <span class="span-IP-address-text">FF00::/8</span> y solo pueden ser direcciones de destino.
                        El rango <span class="span-IP-address-text">FF00::</span> a <span class="span-IP-address-text">FF0F::</span> esta reservado y asignado a traves del RFC 2375. <br>
                        Existen 2 tipos de direcciones multicast IPv6:
                    </p>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direcciones Multicast Conocidas</h4>
                            <p>
                                Se asignan y reservan para grupos de dispositivos conocidos. Hay 2 grupos de multidifusion asignados IPv6 comunes:
                            </p>
                            <ol class="ol-cuaternary-topics">
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">All-nodes Multicast Group (FF02::1)</h5>
                                    <p>
                                        Es un grupo al que se unen todos los dispositivos con IPv6, un paquete enviado a este grupo sera procesado por todas las interfaces IPv6 en la red.
                                        En pocas palabras, es similar a una direccion de Broadcast pero para IPv6.
                                    </p>
                                </li>
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">All-routers Multicast Group (FF02::2)</h5>
                                    <p>
                                        Es un grupo al que se unen todos los routers IPv6.
                                    </p>
                                </li>
                            </ol>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direcciones Multicast de Nodo Solicitados</h4>
                            <p>
                                Todos los dispositivos con IPv6 se unen a este grupo, el grupo es usado para el descubrimiento de vecinos como reemplazo del protocolo ARP, y para la deteccion de direcciones duplicadas (DAD).
                                La direccion se crea automaticamente usando el bloque de direcciones <span class="span-IP-address-text">FF02::0001:FF00:0000/104</span>. <br>
                                En los ultimos 24 bits se colocan los ultimos 6 digitos hexadecimales de la direccion IPv6 unicast del dispositivo objetivo.
                                Por ejemplo, si tengo esta direccion IPv6 de un dispositivo del cual quiero conocer su direccion MAC: <br>
                                <span class="span-IP-address-text">2001:AB:10::1010:50AB/64</span>
                                <br>
                                Los ultimos 6 digitos hexadecimales de la direccion serian: <span class="span-IP-address-text">..10:50AB</span> <br>
                                <br>
                                Añadiendo al bloque de direcciones Multicast de Nodo Solicitado: <br>
                                <span class="span-IP-address-text">FF02::1:FF10:50AB</span> <br>
                                <br>
                                Para conocer la direccion MAC, solamente debo enviar una solicitud al grupo multicast de nodo solicitado del dispositivo objetivo usando NDP (Neighbor Discovery Protocol) con mensajes NS y NA (Neighbor Solicitation y Neighbor Advertisement) , e ICMPv6. <br>
                                Si por otra parte, quisiera saber si la direccion <span class="span-IP-address-text">2001:AB:10::1010:50AB/64</span> es usada por otro dispositivo dentro de la red, entonces enviaria una solicitud similar a ARP al mismo grupo multicast de nodo solicitado, usando NDP, con los mensajes NS y NA, e ICMPv6,
                                si no se recibe respuesta para la solicitud realizada entonces la direccion es unica y puede ser usada.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Direcciones Multicast de Nodo Solicitados</h4>
                            <p>
                                Se combina con la Prioridad en el BID formando el Bridge Priority, y permite identificar la VLAN a la que pertenece una BPDU. <br>
                                Originalmente no existia por la ausencia de la VLAN pero con su introduccion fue añadido. Su utilidad radica en que permite a versiones modernas de STP (como Rapid Spanning Tree Protocol [RSTP] y Peer Vlan Spanning Tree [PVST]) gestionar
                                multiples instancias de STP.
                            </p>
                        </li>
                    </ol>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Direcciones IPv6 Anycast</h3>
                    <p>
                        Es cualquier direccion de unicast IPv6 que se puede asignar a varios dispositivos. <br>
                        Cuando la direccion de destino es una Anycast, esta se rutea a la interfaz mas cercana que este asociada a esa direccion.
                        Las direcciones Anycast se toman del rango de direcciones de unicast y requieren que la interfaz este configurada para identificar la direccion como una Anycast, suprimiendo asi la operacion de DAD (Duplicate Address Detection).
                    </p>
                </li>
                <li class="secondary-li">
                    <h4 class="secondary-header">Otras Direcciones</h4>
                    <ul class="primary-ul">
                        <li>
                            <p><span class="header-in-ul">IPv4 Mapped:</span> FFFF:[ Direccion IPv4 ]::/128</p>
                        </li>
                        <li>
                            <p><span class="header-in-ul">Site Local:</span> F2C0::/10 , no debe usarse.</p>
                        </li>
                        <li>
                            <p><span class="header-in-ul">Ipv4 Compatible:</span> ::[ Direccion IPv4 ] , no debe usarse.</p>
                        </li>
                    </ul>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Direccionamiento Automatico para GUA IPv6</h2>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Mensajes RS y RA</h3>
                    <p>
                        Los hosts obtienen direcciones GUA dinamicamente a traves de ICMPv6.
                    </p>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Mensajes Router Solicitation (RS)</h4>
                            <p>
                                Son enviados por un host para descubrir routers IPv6.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Mensajes Router Advertisement (RA)</h4>
                            <p>
                                Son usados para informar a los hosts como obtener una GUA IPv6, ademas de que brindan informacion de red util como:
                            </p>
                            <ul class="primary-ul">
                                <li><p>Prefijo de red y longitud de prefijo.</p></li>
                                <li><p>Direccion de Default Gasteway.</p></li>
                                <li><p>Direccion de servidor DNS y nombre de dominio.</p></li>
                            </ul>
                            <p>
                                El Router Advertisement puede proporcionar tres metodos para configurar una Global Unicast Address IPv6.
                            </p>
                            <ol class="ol-cuaternary-topics">
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">SLAAC (Stateless Address Autoconfiguration)</h5>
                                    <p>
                                        Permite que un host configure una GUA sin los servicios de un DHCPv6. <br>
                                        La informacion necesaria para configurar la direccion IPv6 se obtiene a partir de los mensajes ICMPv6 RA del router local. <br>
                                        Router Advertisement proporciona el prefijo, y el host usa el metodo de generacion aleatoria o EUI-64 para crear una ID de interfaz.
                                    </p>
                                </li>
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">SLAAC con Servidor DHCPv6 Stateless</h5>
                                    <p>
                                        Router Advertisement les sugiere a los hosts hacer lo siguiente:
                                    </p>
                                    <ul class="primary-ul">
                                        <li><p>Usar SLAAC para crear sus propias GUA IPv6.</p></li>
                                        <li><p>Usar la LLA del router local como direccion de default gateway</p></li>
                                        <li><p>Obtener informacion adicional (direccion de servidor DNS y nombre de dominio) de un servidor DHCPv6 Stateless</p></li>
                                    </ul>
                                </li>
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">Servidor DHCPv6 Statefull (Sin SLAAC)</h5>
                                    <p>
                                        DHCPv6 Statefull es similar a DHCPv4. Un host puede recibir automaticamente una GUA, longitud de prefijo y direccion de servidor DNS,
                                        mientras que la LLA del router es usada como default gateway.
                                    </p>
                                </li>
                            </ol>
                            <p>
                                La siguiente tabla ilustra de mejor manera el uso de Router Solicitation, Router Advertisement, Neighbor Solicitation y Neighbor Advertisement:
                            </p>
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Direccionamiento Automatico</th>
                                    <th>Resolucion de Direcciones</th>
                                    <th>Deteccion de Direcciones Duplicadas</th>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">Router Solicitation</td>
                                    <td>X</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">Router Advertisement</td>
                                    <td>X</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">Neighbor Solicitation</td>
                                    <td></td>
                                    <td>X</td>
                                    <td>X</td>
                                </tr>
                                <tr>
                                    <td style="font-weight: 600;">Neighbor Advertisement</td>
                                    <td></td>
                                    <td>X</td>
                                    <td>X</td>
                                </tr>
                            </table>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
</div>
`;

const HTMLforTopicRedundancyLayer3 = `
<div class="style-for-content-for-topics-or-ev" id="unit1">
    <h1 class="principal-header">Redundancia de Capa 3</h1>
    <img class="image" src="https://th.bing.com/th/id/OIP.0h4H9CVO-vL6bmdIcOpAGAHaG5?rs=1&pid=ImgDetMain" alt="FHRP">
    <ol class="ol-primary-topics">
        <li class="primary-li">
            <h2 class="primary-header">First Hop Redundancy Protocols (FHRP)</h2>
            <p>
                Es una familia de protocolos de red diseñados para proporcionar redundancia en el primer salto de una red (gateway),
                permitiendo que multiples routers compartan una unica direccion IP virtual, proporcionando gateways alternativos en las redes. <br>
                Esto es asi debido a que no existe una manera dinamica de colocar una IP de gateway en los hosts.
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Redundancia del Router</h3>
                    <p>
                        La forma mas comun de implementar la redundancia es mediante la creacion de un router virtual, para hacerlo, se configuran varios routers para que funcionen
                        en conjunto, compartiendo una misma direccion IP y MAC virtuales, dando la sensacion de que solo hay un router. <br>
                        La direccion IP virtual del router virtual funciona como gateway de la red, mientras que la direccion MAC virtual sirve para recibir tramas y responder las solicitudes ARP de los hosts. <br>
                        Ademas, el propio protocolo identifica a los routers responsables de procesar los paquetes y tramas enviados a la direccion IP o MAC virtuales. <br> 
                        Tambien proporciona un mecanismo para determinar el router activo y cuando un router de reserva pasa a ser activo.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Pasos para la Conmutacion por Falla del Router</h3>
                    <p>
                        Al fallar un router activo, se llevan a cabo los siguientes pasos:
                    </p>
                    <ol class="ol-of-steps">
                        <li><p>El router de reserva deja de recibir los mensajes Hello del router activo.</p></li>
                        <li><p>El router de reserva asume el rol de activo, asumiendo la direccion IP y MAC del router virtual.</p></li>
                        <li><p>Todo el trafico se redirecciona al nuevo router activo, mientras que los hosts no se percatan del fallo.</p></li>
                    </ol>
                    <div class="group-of-images">
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*D_uiWSzCS84GPq24i0noeQ.png" alt="Router Activo funciona correctamente">
                        <img src="https://farm5.staticflickr.com/4824/45656033524_67c55a2163_o.png%20alt=" alt="Router de Reserva asume rol de Activo">
                    </div>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Procolos de FHRP</h3>
                    <ul class="primary-ul">
                        <li><p><span class="header-in-ul">Hot Standby Router Protocol (HSRP , Protocolo de Router de Reserva Activo)</span></p></li>
                        <li><p><span class="header-in-ul">HSRP para IPv6</span></p></li>
                        <li><p><span class="header-in-ul">Virtual Router Redundancy Protocol version 2 (VRRPv2 , Protocolo de Redundancia de Router Virtual)</span></p></li>
                        <li><p><span class="header-in-ul">VRRPv3</span></p></li>
                        <li><p><span class="header-in-ul">Gateway Load Balancing Protocol (GLBP , Protocolo de Equilibrio de Carga del Gateway)</span></p></li>
                        <li><p><span class="header-in-ul">GLBP para IPv6</span></p></li>
                        <li><p><span class="header-in-ul">ICMP Router Discovery Protocol (IRDP , Protocolo de Deteccion del Router ICMP)</span></p></li>
                    </ul>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Hot Standby Router Protocol (HSRP)</h2>
            <p>
                Es un protocolo propietario de Cisco, el cual permite la comnutacion por error (failover) de forma transparente de un router o switch de capa 3 de primer salto.
                En HSRP existen 2 tipos de router, router Activo y router Standby, los cuales cumplen el rol de activo y en espera respectivamente.
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Prioridad</h3>
                    <p>
                        La prioridad es un valor decimal que va de 0 a 255, siendo 100 el valor por defecto, la prioridad sirve para determinar que router sera el Activo, siendo el router con mayor prioridad
                        el elegido para tomar el rol de activo. <br>
                        Por defecto, si un router asume el rol de activo, este no lo cedera ni aunque se una otro router con mayor prioridad. Para evitar esto, se debe forzar la eleccion de un nuevo router activo con el comando <span class="span-command-text">standby preempt</span>.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Caracteristicas</h3>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">HelloTime</h4>
                            <p>
                                Por defecto, HSRP envia mensajes Hello cada 3 segundos para saber si su vecino sigue vivo o funcionando. Estos mensajes se envian a la direccion multicast 224.0.0.2 en IPv4 y a la direccion FF02::66 en IPv6.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">HoldTime</h4>
                            <p>
                                Es el tiempo minimo de espera de mensajes Hello del router activo, por defecto es de 10 segundos, si el router no recibe mensajes Hello despues de ese tiempo, entonces se asume que el router vecino ha fallado.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Estados</h4>
                            <ul class="primary-ul">
                                <li>
                                    <p>
                                        <span class="header-in-ul">Initial (Init)</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">Learn:</span> Aun no se ha determinado la direccion IP virtual.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">Listen:</span> Se conoce la direccion IP virtual, pero no al router activo o de espera.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">Speak:</span> Los routers intercambian mensajes Hello y se elige al router Active y Standby.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">Standby:</span> Router candidato para convertirse en router activo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span class="header-in-ul">Active:</span> Router que gano la eleccion.
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Cabecera HSRP</h3>
                    <p>
                        La cabecera de HSRP tiene una longitud de 32 bits (4 bytes).
                    </p>
                    <table>
                        <tr>
                            <td>Version</td>
                            <td>Opcode</td>
                            <td>State</td>
                            <td>Hellotime</td>
                        </tr>
                        <tr>
                            <td>Holdtime</td>
                            <td>Priority</td>
                            <td>Group</td>
                            <td>Reserved</td>
                        </tr>
                        <tr>
                            <td colspan="4">Authentication Data</td>
                        </tr>
                        <tr>
                            <td colspan="4">Virtual IP Address</td>
                        </tr>
                    </table>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Opcode</h4>
                            <p>
                                Indica la operacion que se llevara a cabo
                            </p>
                            <ul class="primary-ul">
                                <li><p><span class="header-in-ul">0 (Hello):</span> El router esta funcionando correctamente y es capaz de convertirse en el router Activo o Standby.</p></li>
                                <li><p><span class="header-in-ul">1 (Coup):</span> El router desea convertirse en el router Activo.</p></li>
                                <li><p><span class="header-in-ul">2 (Resign):</span> El router ya no desea ser el router Activo.</p></li>
                            </ul>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">State</h4>
                            <p>
                                Indica el estado actual del router al enviar un mensaje.
                            </p>
                            <table>
                                <tr>
                                    <th>Binario</th>
                                    <th>Decimal</th>
                                    <th>Estado</th>
                                </tr>
                                <tr>
                                    <td>00000000</td>
                                    <td>0</td>
                                    <td>Initial</td>
                                </tr>
                                <tr>
                                    <td>00000001</td>
                                    <td>1</td>
                                    <td>Learn</td>
                                </tr>
                                <tr>
                                    <td>00000010</td>
                                    <td>2</td>
                                    <td>Listen</td>
                                </tr>
                                <tr>
                                    <td>00000100</td>
                                    <td>4</td>
                                    <td>Speak</td>
                                </tr>
                                <tr>
                                    <td>00001000</td>
                                    <td>8</td>
                                    <td>Standby</td>
                                </tr>
                                <tr>
                                    <td>00010000</td>
                                    <td>16</td>
                                    <td>Active</td>
                                </tr>
                            </table>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Virtual Router Redundancy Protocol (VRRP)</h2>
            <p>
                Es un protocolo multivendor, este no es propiedad de Cisco y, a pesar de tener un mecanismo similar a HSRP, ambos no son compatibles. Aqui existen 2 tipos de router, router Master y Backup. 
            </p>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Gateway Load Balancing Protocol (GLBP)</h2>
            <p>
                Funciona como HSRP y VRRP, pero realiza un balanceo de carga entre los routers configurados con GLBP.
            </p>
        </li>
    </ol>
</div>
`;

const HTMLforTopicACL = `
<div class="style-for-content-for-topics-or-ev" id="unit2">
    <h1 class="principal-header">Access Control List (ACL)</h1>
    <img class="image" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgthghhzbnCEQYmZfex7vStXoFBLC8G9WtPYvPXy3HAM44JpiujlZn3pi8zf5op-KjA6i7wG5pWjwbCarQCB_ED8cP9g-EXP4zGW8F1MCBJbaTNFrMCyk7RxRMC19KdbEmE0RMyDpk1SpQP1qglv55Lvv4pgRI7Eg0HxRuxyfgYAbUNnS-SENvAmIJJ0Q/s800/access_list.jpg" alt="ACL">
    <ol class="ol-primary-topics">
        <li class="primary-li">
            <h2 class="primary-header">Lista de Control de Acceso</h2>
            <p>
                Los routers toman decisiones de enrutamiento basadas en la informacion del encabezado del paquete. <br>
                El router compara la IP de destino del paquete con las rutas de su tabla de enrutamiento buscando la mayor coincidencia. <br>
                Este mismo proceso se puede usar para filtrar el trafico con una ACL.
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Definicion de ACL</h3>
                    <p>
                        Una ACL es una seria de comandos del IOS que controlan si un router reenvia o descarta paquetes segun la informacion en su encabezado. <br>
                        Una Lista de Control de Acceso utiliza una lista secuencial de declaraciones (permit o deny) conocidas como Entradas de Control de Acceso (ACE) o instrucciones de ACL. <br>
                        Al aplicar una ACL a una interfaz, el router compara la informacion del encabezado del paquete con cada ACE de manera secuencial (de arriba hacia abajo), esto es lo que se conoce como <span class="span-resalt-text">filtrado de paquetes</span>. <br>
                        Por defecto, un router no couenta con ninguna ACL configurada. <br>
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Tareas que Requieren el uso de una ACL</h3>
                    <ul class="primary-ul">
                        <li><p>Limitar el trafico de la red para aumentar el rendimiento.</p></li>
                        <li><p>Proporcionar un control de flujo del trafico</p></li>
                        <li><p>Proporcionar un nivel de basico de seguridad para el acceso a la red.</p></li>
                        <li><p>Filtrar el trafico en funcion del tipo de trafico.</p></li>
                        <li><p>Permitir o denegarles a hosts el acceso a los servicios de red.</p></li>
                        <li><p>Proporcionar prioridad a cierto trafico.</p></li>
                    </ul>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Filtrado de Paquetes</h2>
            <p>
                Controla el acceso a una red analizando los paquetes y descartando o permitiendo el paso de estos. <br>
                El filtrado de paquetes puede producirse en la capa 3 o capa 4.
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Tipos de ACL en Dispositivos de Red Cisco</h3>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">ACL Estandar</h4>
                            <p>
                                ID entre 1 y 99, realiza un filtrado a nivel de capa 3 usando la direccion IP de origen. Se suele configurar cerca a la red de destino.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">ACL Extendida</h4>
                            <p>
                                ID entre 100 y 199, realiza un filtrado en capa 3 y 4 usando la direccion IP de origen, de destino, los puertos TCP y UDP e informacion de tipo de protocolo
                                opcional. Se suele configurar cerca a la red de origen.
                            </p>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h3 class="primary-header">ACL de Entrada y de Salida</h3>
            <p>
                Las ACL pueden ser configuradas para aplicarse al trafico entrante o saliente.
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">ACL de Entrada</h3>
                    <p>
                        Filtra los paquetes antes de que se enruten, ahorrando la sobrecarga de enrutar un paquete que se va a descartar. Son ideales cuando la red conectada a una interfaz de entrada
                        es el unico origen a examinar.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">ACL de Salida</h3>
                    <p>
                        Filtran los paquetes despues de que se enrutan. Sin importar la intefaz de entrada, los paquetes se enrutan a una interfaz saliente y luego se procesan a traves de la ACL de salida.
                    </p>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Funcionamiento de las ACL</h2>
            <p>
                Al aplicar una ACL a una interfaz se realiza lo siguiente:
            </p>
            <ol class="ol-of-steps">
                <li><p>El router extrae la informacion del encabezado del paquete.</p></li>
                <li><p>El router compara la informacion extraida con cada ACE de forma secuencial.</p></li>
                <li>
                    <p>
                        Si hay una coincidencia se realiza la instruccion y el resto de las ACE no se compara. <br>
                        Si no existe ninguna coincidencia, el paquete se descarta por una ACE de denegacion implicita presente en todas las ACL.
                    </p>
                </li>
            </ol>
        </li>
    </ol>
</div>
`;

const HTMLforTopicVPN = `
<div class="style-for-content-for-topics-or-ev" id="unit2">
    <h1 class="principal-header">Virtual Private Network (VPN)</h1>
    <img class="image" src="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/04/vpn_tunnel.gif" alt="VPN">
    <ol class="ol-primary-topics">
        <li class="primary-li">
            <h2 class="primary-header">Redes Privadas Virtuales</h2>
            <p>
                Para proteger el trafico de red entre sitios y usuarios, las organizaciones usan las VPN para crear conexiones de red privada de extremo a extremo.
            </p>
            <p>
                Una VPN es privada porque el trafico se encripta para preservar la confidencialidad de los datos y es virtual porque la informacion se transporta usando una red publica y no una red privada como tal.
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Beneficios de las VPN</h3>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">Escalabilidad</h4>
                            <p>
                                Permite a las organizaciones usar internet, los que facilita la adicion de nuevos dispositivos sin tener que invertir en infraestructura.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Seguridad</h4>
                            <p>Las VPN proporcionan mayor seguridad mediante el uso de encriptacion avanzada y protocolos de autenticacion.</p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Costos</h4>
                            <p>
                                Gracias a la llegada de tecnologias rentables y el aumento del ancho de banda en conexiones remotas, la implementacion de una VPN es mas rentable. Ademas, para implementar una VPN no requerimos
                                de una conexion fisica dedicada, ya que la VPN crea un "tunel logico" por donde se envian los datos de forma segura. El termino "tunel logico" representa el trafico cifrado que pasa por una red publica.
                            </p>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">Compatibilidad</h4>
                            <p>
                                Las VPN se pueden implementar en una amplia variedad de opciones de enlace WAN, incluidas todas las tecnologias populares de banda ancha.
                            </p>
                        </li>
                    </ol>
                    <p>
                        Adicional a esto, las VPN modernas ahora admiten funciones de encriptacion como el Internet Protocol Security (IPSec) y las VPN de Secure Socket Layer (SSL) para proteger el trafico de red.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Tipos de VPN</h3>
                    <p>
                        Las VPN se implementan comunmente en una de estas configuraciones:
                    </p>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">VPN Site-to-Site</h4>
                            <p>
                                Se crea usando los dispositivos de terminacion VPN (puertos de enlace VPN), los cuales estan preconfiguradas con informacion para establecer un tuner seguro entre ellos.
                            </p>
                            <p>Este tipo de VPN permite la conexion segura entre 2 o mas LAN remotas a traves de una red ISP. Son comunmente usadas para extender la red de una compañia (conexion de sucursales , oficinas , etc).</p>
                            <p>Cuando un host en una LAN se comunica con otro en LAN diferente, el trafico se cifra en un dispositivo de terminacion VPN y se descifra en otro, sin que ninguno de los hosts se entere de que existe una VPN o un cifrado de por medio.</p>
                            <img class="image" src="https://community.cisco.com/kxiwq67737/attachments/kxiwq67737/6001-discussions-vpn/97602/1/s2s-vpn-com.png" alt="VPN Site-to-Site">
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">VPN de Acceso Remoto</h4>
                            <p>Se crea dinamicamente para establecer una conexion segura entre un cliente y un dispositivo de terminacion VPN.</p>
                            <p>Esta VPN permite a los usuarios remotos conectarse de forma segura a la red de una empresa mediante la creacion de un tunel encriptado.</p>
                            <p>Tambien permiten a los contratistas, socios y usuarios acceder a recursos y contribuir a la productividad empresarial sin comprometer la seguridad de la red.</p>
                            <img class="image" src="https://ccnadesdecero.es/wp-content/uploads/2018/02/Soluciones-VPN-con-SSL-de-Cisco-500x349.png" alt="VPN de Acceso Remoto">
                        </li>
                    </ol>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">VPN Usadas por Entidades</h3>
                    <ol class="ol-terciary-topics">
                        <li class="terciary-li">
                            <h4 class="terciary-header">VPN Administradas por Empresas</h4>
                            <ol class="ol-cuaternary-topics">
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">VPN Site-to-Site</h5>
                                    <ul class="primary-ul">
                                        <li>
                                            <p><span class="header-in-ul">VPN IPSec</span></p>
                                        </li>
                                        <li>
                                            <p><span class="header-in-ul">GRE sobre IPSec</span></p>
                                        </li>
                                        <li>
                                            <p><span class="header-in-ul">Cisco Dynamic Multipoint Virtual Private Network (DMVPN)</span></p>
                                        </li>
                                        <li>
                                            <p><span class="header-in-ul">IPSec Virtual Tunner Interface (VTI)</span></p>
                                        </li>
                                    </ul>
                                </li>
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">VPN de Acceso Remoto</h5>
                                    <ul class="primary-ul">
                                        <li>
                                            <p><span class="header-in-ul">Conexion VPN IPSec basado en el cliente</span></p>
                                        </li>
                                        <li>
                                            <p><span class="header-in-ul">Conexion SSL sin cliente</span></p>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                        <li class="terciary-li">
                            <h4 class="terciary-header">VPN Administradas por Proveedores de Servicios de Internet (ISP)</h4>
                            <ol class="ol-cuaternary-topics">
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">Capa 2 y Capa 3</h5>
                                    <ul class="primary-ul">
                                        <li>
                                            <p>
                                                <span class="header-in-ul">Multiprotocol Label Switching (Conmutacion de Etiquetas de Protocolos Multiples , MPLS)</span>, es un metodo para establecer
                                                rutas dedicadas a traves de redes sin depender del tipico proceso de enrutamiento.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li class="cuaternary-li">
                                    <h5 class="cuaternary-header">Soluciones Antiguas</h5>
                                    <ul class="primary-ul">
                                        <li>
                                            <p>
                                                <span class="header-in-ul">Frame Relay:</span> Metodo de conmutacion orientado a paquetes para la interconexion de redes LAN y WAN sobre redes publicas y privadas.
                                            </p>
                                        </li>
                                        <li>
                                            <p><span class="header-in-ul">Asynchronous Transfer Mode (ATM , Modo de Transferencia Asincrona)</span></p>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
</div>
`;

const HTMLforTopicFirewall = `
<div class="style-for-content-for-topics-or-ev" id="unit2">
    <h1 class="principal-header">Firewall</h1>
    <p class="text">
        Conocido tambien como cortafuegos, es un dispositivo de red que puede ser implementado como hardware o como software y que se encarga de monitorear los paquetes que entran y salen de las redes, filtrandolos de
        acuedro con reglas establecidas.
    </p>
    <p class="text">
        Surgen en 1980 como una herramienta de seguridad basada en el filtrado del trafico teniendo en cuenta ciertas reglas.
        Desde entonces los firewall fueron mejorando añadiendo funciones (como DPI , IPS , etc), reglas para el filtrado de paquetes y alcance dentro del modelo OSI.
    </p>
    <p class="text">
        En sus inicios se ubicaban en los limites entre redes seguras y no seguras. Pero ahora, tambien se implementan para proteger segmentos de redes internas.
    </p>
    <ol class="ol-primary-topics">
        <li class="primary-li">
            <h2 class="primary-header">Tipos de Firewall</h2>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Firewall Basado en Proxy</h3>
                    <p>
                        Actuan como intermediario entre los hosts que solicitan datos y la fuente de los datos solicitados. Los hosts de origen llegan al firewall, el proxy, antes de enviar, filtra
                        los paquetes, oculta la informacion al destinatario y protege la red interna del host de origen, para que despues el firewall hace una conexion separada al destino.
                    </p>
                    <ul class="primary-ul">
                        <li><p><span class="header-in-ul">Ventaja:</span> Los equipos fuera de la red protegida, al no estar conectados directamente a el, solo pueden recopilar informacion limitada.</p></li>
                        <li><p><span class="header-in-ul">Desventaja:</span> La terminacion de las conexiones entrantes y la creacion de conexiones salientes mas el filtrado de paquetes causan retrasos que pueden degradar el rendimiento.</p></li>
                    </ul>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Stateful Firewall (Firewall de Estado)</h3>
                    <p>
                        Brinda una mejora del rendimiento respecto al Firewall Basado en Proxy, Stateful Firewall realiza un seguimiento de informacion sobre conexiones, realizando primero una inspeccion inicial a los paquetes salientes, 
                        estableciendo que conexiones son permisibles y guardando ese estado en su memoria, de esta forma, los paquetes entrantes ya no se inspeccionan, debido a que se identifican como respuestas a conexiones legitimas.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Web Application Firewall (WAF , Firewall de Aplicaciones Web)</h3>
                    <p>
                        Se situan entre los servidores que ofrecen la aplicacion e internet. Analizan las conexiones HTTP y HTTPS, protegen de ataques HTML, inyeccion SQL, scripting, XSS, etc.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Next Generation Firewall (NGFW, Firewall de Siguiente Generacion)</h3>
                    <p>
                        Filtran el trafico usando una serie de reglas, a parte del estado de las conexiones y las direcciones de destino, como los que tienen permitido hacer las aplicaciones
                        y los usuarios, ademas de mezclar datos de otras tecnologias. 
                    </p>
                    <p>
                        Alunos NGFW realizan filtrado de URL, tienen la capacidad de terminar conexiones SSL y TLS y soportar SD-WAN.
                    </p>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Caracteristicas Ofrecidas por los Firewalls</h2>
            <p>
                Anteriormente los firewall ofrecian una o 2 de estas caracteristicas, pero ahora todas se incluyen en muchos NGFW. 
            </p>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Intrusion Prevention System (IPS, Sistema de Prevencion de Intrusiones)</h3>
                    <p>
                        Usan una seguridad mas granular, como el rastreo de firmas y la deteccion de anomalias, para evitar el ingreso de amenazas. Esta es cada vez mas una
                        caracteristica estandar del Firewall.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Deep Packet Inspection (DPI, Inspeccion Profunda de Paquetes)</h3>
                    <p>
                        Tipo de filtrado de paquetes que mira mas alla de la procedencia y destino de los paquetes e inspecciona su contenido, revelando los datos que se transmiten
                        y a que aplicacion se accede.
                    </p>
                    <p>
                        El DPI se puede usar tambien para restringir la cantidad de ancho de banda permitida a determinadas aplicaciones.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Terminacion SSL/TLS</h3>
                    <p>
                        El trafico encriptado por SSL no puede leerse, siendo inmune al DPI.
                        Pero, algunos NGFW pueden terminar el trafico SSL (Secure Socket Layer), inspeccionarlo, y luego crear una segunda conexion SSL a la direccion
                        de destino deseada.
                    </p>
                    <p>
                        Esta terminacion y proxying tambien es aplicable a TLS (Transport Layer Security) el cual es una mejora a SSL.
                    </p>
                    <p>
                        La Terminacion SSL/TLS puede ser usada para evitar que empleados malintencionados envien informacion confidencial fuera de la red segura, permitiendo a su vez el paso del trafico legitimo.
                        Esta caracteristica puede plantear problemas de privacidad.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Sandboxing</h3>
                    <p>
                        Disponible en ciertos NGFW, y se usa para aislar archivos junto con su codigo y ejecutarlos en un entorno controlado para averiguar si contienen algo malicioso.
                        Este proceso consume muchos ciclos de CPU y retrasa el trafico.
                    </p>
                    <p>
                        Si se detectara una nueva firma de malware, el cortafuegos puede captar esa informacion y filtrar el trafico que contiene la firma.
                    </p>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Proveedores de Firewall mas Populares</h2>
            <p>
                Segun el ranking de Gatner de firewalls empresariales, hace un tiempo los lideres eran Checkpoint y Palo Alto.
            </p>
            <p>
                Pero en 2017, Fortinet se abria paso y en 2018 Cisco se unio a ellos, actualmente, Sophos esta al borde de ser uno mas de ellos pero se muestra timido. 
            </p>
            <p>
                Gartner tambien otorgo los premios Customer Choice Awards a Cisco, Fortinet y Palo Alto, basandose en los comentarios de los clientes sobre los productos de 17 proveedores.
            </p>
            <p>
                Los demas 12 proveedores son AhnLab, Barracuda Networks, Forcepoint, GreyHeller, Hillstone Networks, Huawei, Juniper Networks, NewH3C, Sangfor, Sonic Wall, Stormshield y Watchguard.
            </p>
        </li>
    </ol>
</div>
`;

const HTMLforTopicProxy = `
<div class="style-for-content-for-topics-or-ev" id="unit2">
    <h1 class="principal-header">Proxy</h1>
    <p class="text">
        Es un elemento de la infraestructura de red que actua como intermediario entre la computadora del cliente, usualmente en una red interna, y un servidor, en una red externa, o viceversa.
    </p>
    <p class="text">
        Un proxy puede ser usado para:
    </p>
    <ul class="ul-list-in-principal-content primary-ul">
        <li><p><span class="header-in-ul">Mejorar la Seguridad</span></p></li>
        <li><p><span class="header-in-ul">Mejorar la Seguridad</span></p></li>
        <li><p><span class="header-in-ul">Balancear la Carga en el Recurso Vigilado</span></p></li>
    </ul>
    <p class="text">
        En el proceso de recibir y transamitir las solicitudes de un host a los servidores de destino, el cliente no se da cuenta de que se esta usando un servidor proxy.
    </p>
    <p class="text">El servidor proxy, al recibir las solicitudes puede:</p>
    <ul class="ul-list-in-principal-content primary-ul">
        <li><p>Transmitirlas directamente al destino del recurso solicitado.</p></li>
        <li><p>Devolver al cliente el recurso solicitado directamente desde su cache, si es que el proxy ya posee el recurso.</p></li>
        <li><p>Denegar el acceso al recurso solicitado.</p></li>
    </ul>
    <ol class="ol-primary-topics">
        <li class="primary-li">
            <h2 class="primary-header">Permitir el Acceso a Recursos Especificos (Incluidos los Bloqueados)</h2>
            <p>
                Se puede usar un servidor proxy para bloquear el acceso a ciertos recursos, pero tambien se puede usar para acceder a un recurso bloqueado, 
                como el acceso directo hacia el proxy si esta permitido podemos enviarle una solicitud, y el proxy accedera al recurso bloqueado. Se debe tener en cuenta que la velocidad de 
                acceso dependera de la ubicacion geografica del proxy a usar.
            </p>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Tipos de Servidores Proxy</h2>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Forward (Directo)</h3>
                    <p>
                        Este servidor se encarga de recibir la solicitud del cliente, el cual indica el servidor de destino y el recurso solicitado, el servidor proxy usa esta informacion para solicitar el mismo el recurso, y una vez cuenta con el recurso, se lo devuelve al cliente.
                    </p>
                    <p>
                        Para hacer uso de este servidor proxy, el equipo del cliente debe configurarse especificamente con la direccion IP del servidor.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Reverse (Inverso)</h3>
                    <p>
                        Para el cliente, se ve como un servidor mas, el servidor proxy recibe las solicitudes del cliente y, con la informacion brindada, el proxy se encarga de realizar la solicitud del recurso y se la devuelve al cliente como si el propio servidor
                        proxy fuera el origen del recurso solicitado inicialmente.
                    </p>
                    <p>
                        Para usar este servidor, no es necesaria la configuracion del equipo del cliente.
                    </p>
                </li>
            </ol>
        </li>
        <li class="primary-li">
            <h2 class="primary-header">Usos del Proxy</h2>
            <ol class="ol-secondary-topics">
                <li class="secondary-li">
                    <h3 class="secondary-header">Fortalecer la Seguridad de la Infraestructura Corporativa</h3>
                    <p>
                        Muchas empresas tienen recursos expuestos a la red publica, el servidor proxy agrega un nivel de seguridad entre el recurso protegido
                        y la red externa.
                    </p>
                    <p>
                        De esta forma, un atacante podra acceder al servidor proxy pero no al servidor con el recurso protegido, reduciendo la probabilidad de pirateo.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Control de Usuarios al Usar Internet</h3>
                    <p>
                        Los administradores de red pueden usar las capacidades de un servidor proxy para controlar facilmente que dispositivos tendran acceso a Internet y que
                        sitios web podran visitar.
                    </p>
                    <p>
                        Ademas, al activar el registro en el proxy, los administradores de red pueden rastrear cuando y a que contenido acceden los empleados para fines internos.
                    </p>
                </li>
                <li class="secondary-li">
                    <h3 class="secondary-header">Equilibrio de Carga en Recursos Compartidos</h3>
                    <p>
                        Para sitios web o recursos populares con varios servidores distribuidos y usuarios en diferentes lugares, un servidor proxy puede usarse para evitar la sobrecarga del servicio
                        y la perdida de eficiencia, esto mediante la creacion de un unico recurso web en el proxy, que servira como un unico punto de acceso.
                    </p>
                    <p>
                        El proxy equilibra las multiples solicitudes a cada servidor de destino para que ninguno se sobrecargue.
                    </p>
                    <p>
                        Todo esto en segundo plano, para evitar la interrupcion del servicio.
                    </p>
                </li>
            </ol>
        </li>
    </ol>
</div>
`;

const HTMLforTopicSNMP = `
<div class="style-for-content-for-topics-or-ev" id="unit3"></div>
`;

const HTMLforTopicSyslog = `
<div class="style-for-content-for-topics-or-ev" id="unit3"></div>
`;

const HTMLforTopicNAT = `
<div class="style-for-content-for-topics-or-ev" id="unit4">NAT</div>
`;

const HTMLforTopicSDN = `
<div class="style-for-content-for-topics-or-ev" id="unit4">SDN</div>
`;

const HTMLforTopicSDNController = `
<div class="style-for-content-for-topics-or-ev" id="unit4">SDN CONTROLLER</div>
`;

/* ####################################### FIN HTML de los temas de Redes y Conectividad II ####################################### */


/* ####################################### HTML de las evaluaciones de Redes y Conectividad II ####################################### */

const HTMLforLaboratory1 = ``;
const HTMLforLaboratory2 = ``;
const HTMLforLaboratory3 = ``;
const HTMLforLaboratory4 = ``;
const HTMLforLaboratory5 = ``;
const HTMLforLaboratory6 = ``;
const HTMLforLaboratory7 = ``;
const HTMLforLaboratory8 = ``;
const HTMLforLaboratory9 = ``;
const HTMLforLaboratory10 = ``;
const HTMLforLaboratory11 = ``;
const HTMLforLaboratory12 = ``;

const HTMLforChallenge1 = ``;
const HTMLforChallenge2 = ``;
const HTMLforChallenge3 = ``;
const HTMLforChallenge4 = ``;

const HTMLForPartialExam1 = ``;
const HTMLForPartialExam2 = ``;
const HTMLForHalfCycleExam = ``;
const HTMLForFinalExam = ``;

/* ####################################### FIN HTML de las evaluaciones de Redes y Conectividad II ####################################### */


/* ####################################### Variables Principales para el HTML ####################################### */
var DictionaryTopicsForRedes = {
    "Unidad I":{
        "Protocolo de Arbol de Expansion (STP)" : HTMLforTopic_STP,
        "Direccionamiento IPv6" : HTMLforTopicIPv6Addressing,
        "Redundancia (FHRP)" : HTMLforTopicRedundancyLayer3,
    },
    "Unidad II":{
        "Lista de Control de Acceso (ACL)" : HTMLforTopicACL,
        "Redes Privadas Virtuales (VPN)" : HTMLforTopicVPN,
        "Firewall" : HTMLforTopicFirewall,
        "Proxy" : HTMLforTopicProxy,
    },
    "Unidad III":{
        "Monitorizacion de Redes con SNMP" : HTMLforTopicSNMP,
        "Monitorizacion de Redes con Syslog" : HTMLforTopicSyslog,
    },
    "Unidad IV":{
        "Network Address Translation (NAT)" : HTMLforTopicNAT,
        "Software Defined Network (SDN)" : HTMLforTopicSDN,
        "Controlador SDN" : HTMLforTopicSDNController,
    },
}
var DictionaryEvaluationsForRedesII = {
    "Laboratorios" : {
        "Laboratorio 1" : `LAB1`,
        "Laboratorio 2" : `LAB2`,
        "Laboratorio 3" : `LAB3`,
        "Laboratorio 4" : `LAB4`,
        "Laboratorio 5" : `LAB5`,
        "Laboratorio 6" : `LAB6`,
        "Laboratorio 7" : `LAB7`,
        "Laboratorio 8" : `LAB8`,
        "Laboratorio 9" : `LAB9`,
        "Laboratorio 10" : `LAB10`,
        "Laboratorio 11" : `LAB11`,
        "Laboratorio 12" : `LAB12`,
    },
    "Desafios" : {
        "Desafio 1" : ``,
        "Desafio 2" : ``,
        "Desafio 3" : ``,
        "Desafio 4" : ``,
    },
    "Examenes Escritos" : {
        "Examen Parcial 1" : ``,
        "Examen Parcial 2" : ``,
        "Examen de Medio Curso" : ``,
        "Examen Final" : ``,
    },
};

Main_Function(DictionaryEvaluationsForRedesII , DictionaryTopicsForRedes);

/* ####################################### FIN Variables Principales para el HTML ####################################### */