const datosTabs = {
    historia: {
        texto: "Nuestra institución educativa Académico, fue fundada en el año 1.743 en virtud de las donaciones por $90.000.oo (noventa mil pesos) que hicieron respectivamente Don Cristóbal Botín y Doña María Lenis y Gamboa, ilustres habitantes de la región. Dicha fundación estuvo a cargo de la compañía de Jesús, cuyos representantes conocieron en Quito la cláusula testamentaria de don Cristóbal Botín, en la cual solicitaba, junto con el cabildo de Buga, el permiso de la corona española. La licencia fue concedida mediante real cédula de Felipe V, rey de España en noviembre de 1.743 y así se funda el colegio en la ciudad de Buga.<br><br>" +
               "En el nuevo colegio de los Jesuitas, se dictan clases hasta 1.767 cuando la compañía religiosa es expulsada de España y todos sus dominios en América a consecuencia de la aplicación de las reformas borbónicas. En las primeras décadas del siglo XIX a raíz de las luchas por la independencia el Colegio presenta períodos de poca duración por constantes cierres, reiniciando labores en 1.826.<br><br>" +
               "En 1.859, el colegio Académico establece su reglamento orgánico para la enseñanza secundaria, renovándose en 1.864 con el nombre de Colegio Mayor de Buga.<br><br>" +
               "En 1.866 se establecen las facultades de Medicina y Cirugía. Entre los años 1.867 y 1.883, el colegio recibe una valiosa ayuda económica de $1.000.oo (Mil pesos) del estado soberano del Cauca, pero en 1.884, tanto los planes de estudio como el reglamento orgánico son orientados por el gobierno nacional, siendo esta la primera imposición administrativa de la nación, con lo cual se afecta la autonomía del colegio en cuanto a Educación Superior.<br><br>" +
               "En 1.910, se crea una nueva biblioteca para el colegio con aportes bibliográficos del Presbítero Daniel Montoya Payan y el Doctor Alejandro Cabal Pombo, ya que durante el siglo XIX la biblioteca existente fue víctima de constantes saqueos e incendios por efectos de las distintas guerras civiles, toda vez que el edificio de la nación era convertido en Cuartel Militar.<br><br>" +
               "En 1.912, se dispone para el Colegio la Instrucción Secundaria y se le da autonomía para manejar sus propias rentas, que se le quita al año siguiente (1.913) convirtiéndola en el LICEO PÚBLICO DE BUGA, situación ésta que duró poco, porque nuevamente en 1.914 se le devuelve la solidez y autonomía bajo la administración de una fundación que demuestra capacidades para el manejo tanto de sus bienes como de los programas de enseñanza superior permitiéndole crear posteriormente la Facultad de Bacteriología.<br><br>" +
               "En la décadas de 1.930 y 1.940, fueron acontecimientos destacables para la vida de la institución: La creación del Consejo de Estudiante (1.933) y la inclusión de la enseñanza del deporte en los programas educativos (1.945), destacándose la práctica de natación en las aguas del Rio Guadalajara, en horas de la tarde.<br><br>" +
               "En la década de 1.950-1.960, el colegio era un establecimiento de enseñanza clásica. Clases magistrales, disciplina centrada en castigos, llegando hasta la expulsión. Se le daba mucha importancia a los actos solemnes, se enseñaban materias reglamentarias con un carácter muy confesional propio de la época. Se exaltaban los valores patrios, los cívicos y los religiosos. El colegio vivió en 1.950 el gran acontecimiento de la creación de la Banda Filarmónica.",
        imagen: "img/antiguo.jpg"
    },
    mision: {
        texto: "La institución educativa académico de Guadalajara de Buga propende por la formación de calidad para sus estudiantes, fortaleciendo sus procesos cognitivos y emocionales desde la ciencia, la tecnología, la cultura y el deporte inculcando en ellos valores que favorezcan su sentido social y la construcción de un proyecto de vida basado en el mejoramiento continuo de su calidad humana a través del desarrollo de las competencias básicas transversales y específicas en las áreas del saber y en las dimensiones del ser, asegurando su continuidad en las cadenas de formación.",
        imagen: "img/jairo.jpg"
    },
    vision: {
        texto: "La institución educativa académico de Guadalajara de Buga al año 2030 será reconocida en el sector educativo nacional, por ofrecer el servicio de educación con calidad MUY SUPERIOR y formar personas íntegras para una sociedad que requiere de una educación centrada en valores, con la participación eficiente de sus egresados en el ámbito productivo o en la educación superior con grandes alcances académicos, laborales y sociales que les permita contribuir positivamente al desarrollo y crecimiento sostenible de su entorno sociocultural.",
        imagen: "img/vision.jpg"
    },
    himno: {
        texto: `
            <div style="text-align: left; max-height: 420px; overflow-y: auto; padding-right: 5px;">
                <h3 style="color: var(--color-primary); font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 0.3rem;">Símbolos Institucionales &amp; Himno</h3>
                <p style="font-size: 0.82rem; color: #475569; margin-bottom: 1rem;">Elementos que representan nuestra historia, identidad y el orgullo de pertenecer a la institución.</p>
                
                <!-- Apartado de Símbolos: Escudo, Bandera y Mascota -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.8rem; margin-bottom: 1.2rem;">
                    
                    <!-- Escudo -->
                    <div style="background: #ffffff; padding: 0.8rem; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
                        <img src="img/escudo1.jpg" alt="Escudo Institucional" style="width: 55px; height: 55px; object-fit: contain; margin-bottom: 0.4rem;">
                        <h4 style="color: var(--color-primary); font-size: 0.9rem; margin-bottom: 0.2rem;">Escudo Institucional</h4>
                        <p style="font-size: 0.75rem; color: #475569; margin: 0;">Blasón heráldico que simboliza la ciencia, la fe, el honor y la tradición de nuestra casa de estudios.</p>
                    </div>

                    <!-- Bandera -->
                    <div style="background: #ffffff; padding: 0.8rem; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
                        <img src="img/bandera_institucional.jpg" alt="Bandera Institucional" style="width: 55px; height: 55px; object-fit: contain; margin-bottom: 0.4rem;">
                        <h4 style="color: var(--color-primary); font-size: 0.9rem; margin-bottom: 0.2rem;">Bandera Institucional</h4>
                        <p style="font-size: 0.75rem; color: #475569; margin: 0;">Emblema de libertad, paz y pertenencia que flamea con orgullo en nuestros actos solemnes.</p>
                    </div>

                    <!-- Mascota -->
                    <div style="background: #ffffff; padding: 0.8rem; border-radius: 8px; border: 1px solid #cbd5e1; text-align: center;">
                        <img src="img/mascota.jpg" alt="Mascota Institucional" style="width: 55px; height: 55px; object-fit: contain; margin-bottom: 0.4rem;">
                        <h4 style="color: var(--color-primary); font-size: 0.9rem; margin-bottom: 0.2rem;">Mascota Institucional</h4>
                        <p style="font-size: 0.75rem; color: #475569; margin: 0;">Representa el vigor, la energía, el espíritu deportivo y la unión de la familia académica.</p>
                    </div>

                </div>

                <h4 style="font-size: 1rem; color: var(--color-primary); margin-bottom: 0.4rem;">Himno del Colegio Académico de Buga</h4>
                <div style="font-size: 0.82rem; color: #1e293b; line-height: 1.5; margin-bottom: 1rem; background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
                    <strong>Coro</strong><br>
                    Salve claustro de heráldicos timbres<br>
                    De Colombia preciado blasón<br>
                    Que es taller de la ciencia y es templo<br>
                    Consagrado a la fe y el honor.<br><br>
                    
                    <strong>Estrofa I</strong><br>
                    Canten otros sus glorias pasadas<br>
                    Que fue antaño academia y cuartel<br>
                    Que en la paz fue morada de sabios<br>
                    Y en la guerra trinchera y broquel.<br><br>
                    
                    <strong>Estrofa II</strong><br>
                    Buga Buga letrada y castiza<br>
                    Milagrosa ciudad Señorial<br>
                    El Colegio Académico es gloria<br>
                    Y bastión de su noble heredad.<br><br>
                    
                    <strong>Estrofa III</strong><br>
                    A nosotros por alto destino<br>
                    Su tesoro confió la ciudad<br>
                    El colegio es el arca gloriosa<br>
                    Cada alumno su noble guardián.<br><br>
                    
                    <strong>Estrofa IV</strong><br>
                    Con las almas echadas al viento<br>
                    Como alegres banderas al sol<br>
                    Con los libros cumplimos la cita<br>
                    Que nos dan el deber y el honor.<br><br>
                    
                    <strong>Estrofa V</strong><br>
                    El Colegio Académico enseña<br>
                    La virtud y la ciencia a la par<br>
                    Y está escrito en sus muros patricios<br>
                    Libre solo te hará la verdad.
                </div>

                <!-- Reproductor de YouTube -->
                <h4 style="font-size: 0.95rem; color: var(--color-primary); margin-bottom: 0.4rem;">Video del Himno Institucional</h4>
                <div style="position: relative; width: 100%; padding-bottom: 50%; height: 0; margin-bottom: 0.8rem; border-radius: 6px; overflow: hidden; border: 1px solid #cbd5e1;">
                    <iframe src="https://www.youtube.com/embed/Fnf5A0mMDsQ" title="Video Himno Académico" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
                </div>

                <div style="text-align: center;">
                    <a href="https://youtu.be/Fnf5A0mMDsQ" target="_blank" style="background: #dc2626; color: white; padding: 0.4rem 1rem; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 6px;">
                        <i class="fa-brands fa-youtube" style="font-size: 1rem;"></i> Ver video directamente en YouTube
                    </a>
                </div>
            </div>
        `,
        imagen: "img/himno_colegio.jpg"
    },
    proyectos: {
        texto: `
            <div style="margin-bottom: 1.2rem;">
                <h3 style="color: var(--color-primary); font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.3rem;">Nuestros Proyectos Insignia</h3>
                <p style="font-size: 0.9rem;">Estos son algunos de los proyectos que nos han hecho destacar y han ayudado a nuestros estudiantes a mejorar.</p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; text-align: left;">
                
                <!-- ACAMUN -->
                <div onclick="verDetalleProyecto('acamun')" style="background: white; padding: 1.2rem; border-radius: 10px; border: 2px solid #cbd5e1; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='#cbd5e1'">
                    <img src="img/acamun.jpg" alt="ACAMUN" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 0.8rem;">
                    <h4 style="color: var(--color-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">ACAMUN <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem; float: right; margin-top: 4px;"></i></h4>
                    <p style="font-size: 0.82rem; color: #475569; margin-bottom: 0.8rem;">Modelo de las Naciones Unidas (MUN) proyecto que busca fomentar el liderazgo, comprensión y oratoria estudiantil.</p>
                    <div style="border-top: 1px solid #e2e8f0; padding-top: 0.6rem; margin-top: auto;">
                        <span style="color: #E1306C; font-weight: 600; font-size: 0.8rem; display: flex; align-items: center; gap: 6px;">
                            <i class="fa-brands fa-instagram" style="font-size: 1rem;"></i> @_acamun_2026
                        </span>
                    </div>
                </div>

                <!-- Sembradores de Vida -->
                <div onclick="verDetalleProyecto('sembradores')" style="background: white; padding: 1.2rem; border-radius: 10px; border: 2px solid #cbd5e1; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='#cbd5e1'">
                    <img src="img/sembradores.jpg" alt="Sembradores de Vida" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 0.8rem;">
                    <h4 style="color: var(--color-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Sembradores de Vida <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem; float: right; margin-top: 4px;"></i></h4>
                    <p style="font-size: 0.82rem; color: #475569; margin-bottom: 0.8rem;">Es un proyecto ambiental enfocado en la preservación ecológica, fomentación del cuidado ambiental, mediante la creación de conciencia.</p>
                    <div style="border-top: 1px solid #e2e8f0; padding-top: 0.6rem; margin-top: auto;">
                        <span style="color: #E1306C; font-weight: 600; font-size: 0.8rem; display: flex; align-items: center; gap: 6px;">
                            <i class="fa-brands fa-instagram" style="font-size: 1rem;"></i> @sembradoresdevidaacademico
                        </span>
                    </div>
                </div>

                <!-- Banda Filarmónica -->
                <div onclick="verDetalleProyecto('banda')" style="background: white; padding: 1.2rem; border-radius: 10px; border: 2px solid #cbd5e1; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.05);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='#cbd5e1'">
                    <img src="img/banda.jpg" alt="Banda Filarmónica" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 0.8rem;">
                    <h4 style="color: var(--color-primary); font-size: 1.1rem; margin-bottom: 0.4rem;">Banda Filarmónica <i class="fa-solid fa-arrow-right" style="font-size: 0.8rem; float: right; margin-top: 4px;"></i></h4>
                    <p style="font-size: 0.82rem; color: #475569; margin-bottom: 0.8rem;">Fundada en 1950, orgullo artístico de nuestra institución...</p>
                    <div style="border-top: 1px solid #e2e8f0; padding-top: 0.6rem; margin-top: auto;">
                        <span style="color: #64748b; font-size: 0.8rem; font-weight: 500;">Tradición y Cultura</span>
                    </div>
                </div>

            </div>
        `,
        imagen: "img/proyectos.jpg"
    },
    nosotros: {
        texto: `
            <div style="text-align: left; max-height: 420px; overflow-y: auto; padding-right: 5px;">
                <h3 style="color: var(--color-primary); font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.3rem;">Nosotros &amp; Instalaciones</h3>
                <p style="font-size: 0.85rem; color: #475569; margin-bottom: 1rem;">Conoce nuestra oferta de servicios, liderazgo académico e infraestructura de primera.</p>

                <!-- Destacado ICFES 2026 -->
                <div style="background: linear-gradient(135deg, #1e3a8a, #0f172a); color: white; padding: 1rem; border-radius: 10px; margin-bottom: 1.2rem; display: flex; align-items: center; gap: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                    <i class="fa-solid fa-trophy" style="font-size: 2.2rem; color: #f59e0b;"></i>
                    <div>
                        <h4 style="margin: 0 0 2px 0; font-size: 1.05rem; color: #fef08a;">¡#1 en Buga - Pruebas ICFES 2026!</h4>
                        <p style="margin: 0; font-size: 0.8rem; color: #e2e8f0; line-height: 1.4;">Este año 2026 nos consolidamos orgullosamente como el colegio público número uno de Guadalajara de Buga en resultados ICFES.</p>
                    </div>
                </div>

                <!-- Información General y Servicios -->
                <div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid #cbd5e1; margin-bottom: 1.2rem;">
                    <h4 style="color: var(--color-primary); font-size: 1rem; margin-top: 0; margin-bottom: 0.6rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px;">Servicios &amp; Jornada Escolar</h4>
                    <ul style="font-size: 0.83rem; color: #334155; line-height: 1.7; padding-left: 1.2rem; margin: 0;">
                        <li><strong>Restaurante Escolar:</strong> Brindamos alimentación complementaria con servicio de <em>desayuno y almuerzo</em> para nuestros estudiantes.</li>
                        <li><strong>Bus Escolar:</strong> Rutas seguras para facilitar el transporte de la comunidad estudiantil.</li>
                        <li><strong>Niveles Educativos &amp; Jornada:</strong> Oferta académica completa operada bajo la modalidad de <em>Jornada Única</em>.</li>
                    </ul>
                </div>

                <!-- Espacio 1: Instalaciones del Colegio -->
                <div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid #cbd5e1; margin-bottom: 1.2rem;">
                    <h4 style="color: var(--color-primary); font-size: 1rem; margin-top: 0; margin-bottom: 0.6rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px;">Nuestras Instalaciones</h4>
                    <p style="font-size: 0.8rem; color: #64748b; margin-bottom: 0.8rem;">Espacios diseñados para el desarrollo integral, tecnológico, cultural y deportivo:</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px;">
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-desktop" style="color: #2563eb;"></i> Sala de sistemas</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-utensils" style="color: #d97706;"></i> Restaurante escolar</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-water-ladder" style="color: #0284c7;"></i> Piscina olímpica</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-futbol" style="color: #16a34a;"></i> Cancha fútbol 11</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-building-columns" style="color: #7c3aed;"></i> Coliseo</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-user-ninja" style="color: #dc2626;"></i> Tatami</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-tree" style="color: #059669;"></i> Zonas verdes</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-book" style="color: #0891b2;"></i> Biblioteca</div>
                        <div style="background: #f8fafc; padding: 6px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: #1e293b; display: flex; align-items: center; gap: 6px; border: 1px solid #e2e8f0;"><i class="fa-solid fa-print" style="color: #475569;"></i> Fotocopiadora</div>
                    </div>
                </div>

                <!-- Espacio 2: Deportes y Horarios Extracurriculares -->
                <div style="background: #f0fdf4; padding: 1rem; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 1.2rem;">
                    <h4 style="color: #166534; font-size: 1rem; margin-top: 0; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 6px;">
                        <i class="fa-solid fa-medal"></i> Deportes &amp; Actividades Extracurriculares
                    </h4>
                    <p style="font-size: 0.82rem; color: #14532d; line-height: 1.5; margin-bottom: 0.6rem;">
                        Aprovechamos nuestros escenarios deportivos y culturales para ofrecer espacios en horarios extracurriculares donde los estudiantes practican y potencian sus talentos:
                    </p>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        <span style="background: #ffffff; color: #15803d; border: 1px solid #86efac; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600;"><i class="fa-solid fa-hand-fist"></i> Deportes de combate</span>
                        <span style="background: #ffffff; color: #15803d; border: 1px solid #86efac; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600;"><i class="fa-solid fa-person-swimming"></i> Natación</span>
                        <span style="background: #ffffff; color: #15803d; border: 1px solid #86efac; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600;"><i class="fa-solid fa-futbol"></i> Fútbol</span>
                        <span style="background: #ffffff; color: #15803d; border: 1px solid #86efac; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600;"><i class="fa-solid fa-masks-theater"></i> Teatro</span>
                        <span style="background: #ffffff; color: #15803d; border: 1px solid #86efac; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600;"><i class="fa-solid fa-person-dancing"></i> Danza</span>
                        <span style="background: #ffffff; color: #15803d; border: 1px solid #86efac; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600;"><i class="fa-solid fa-chess-knight"></i> Ajedrez</span>
                    </div>
                </div>

                <!-- Galería de 4 Imágenes al final de Nosotros -->
                <h4 style="font-size: 1rem; color: var(--color-primary); margin-bottom: 0.6rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px;">Galería de la Institución</h4>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                    <img src="img/nosotros1.jpg" alt="Instalación 1" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                    <img src="img/nosotros2.jpg" alt="Instalación 2" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                    <img src="img/nosotros3.jpg" alt="Instalación 3" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                    <img src="img/nosotros4.jpg" alt="Instalación 4" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                </div>
            </div>
        `,
        imagen: "img/nosotros.jpg"
    }
};

const detallesProyectos = {
    acamun: {
        titulo: "ACAMUN: Una década formando líderes para el mundo",
        descripcion: `
            ACAMUN nació como una iniciativa de la profesora <strong>Francia Lili Osorio</strong>, con el propósito de crear un espacio diferente de aprendizaje, participación y formación para los estudiantes. Desde sus inicios, este proyecto se ha construido bajo una idea fundamental: ser un proyecto de estudiantes para estudiantes, acompañado y orientado por los maestros.<br><br>
            En 2026, ACAMUN celebra su décima edición, alcanzando una década de crecimiento, aprendizaje y transformación. Durante estos años, el proyecto ha evolucionado y se ha fortalecido con cada edición, ampliando sus espacios de participación e involucrando a estudiantes desde grado quinto hasta grado undécimo.<br><br>
            Más que una simulación de las Naciones Unidas, ACAMUN se ha convertido en un escenario donde los estudiantes tienen la oportunidad de comprender el mundo más allá de las cuatro paredes del aula. A través del análisis de problemáticas reales que afectan a diferentes países y comunidades, los participantes asumen posiciones, investigan, argumentan y aprenden a defender sus ideas frente a situaciones de relevancia internacional.<br><br>
            El proyecto busca fortalecer habilidades fundamentales como la oratoria, el liderazgo, la comprensión, el pensamiento crítico, la investigación, la negociación y la capacidad de argumentar y defender una postura de manera respetuosa y fundamentada.<br><br>
            Cada edición representa nuevos desafíos y nuevas oportunidades para aprender. Los estudiantes no solo conocen diferentes realidades políticas, sociales, económicas y ambientales del mundo, sino que también aprenden a escuchar otras perspectivas, dialogar, construir soluciones y comprender que los problemas globales requieren de jóvenes preparados para participar activamente en su sociedad.<br><br>
            Durante estos diez años, ACAMUN ha crecido gracias al compromiso de estudiantes y maestros, convirtiéndose en un proyecto que deja aprendizajes, experiencias y recuerdos en cada generación que participa.<br><br>
            ACAMUN no busca únicamente formar buenos delegados; busca formar jóvenes capaces de comprender su entorno, levantar su voz, defender sus ideas y asumir el liderazgo de un mundo que también les pertenece.<br><br>
            <em>Diez ediciones. Una historia construida por estudiantes. Una visión que trasciende las aulas. Un proyecto que continúa formando líderes para el mundo.</em>
        `,
        instagram: "@_acamun_2026",
        linkIg: "https://www.instagram.com/_acamun_2026?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==",
        fotos: ["img/acamun1.jpg", "img/acamun2.jpg", "img/acamun3.jpg", "img/acamun4.jpg"]
    },
    sembradores: {
        titulo: "Sembradores de Vida",
        descripcion: `
            Sembradores de Vida es un proyecto transversal de la Institución Educativa Académico, vinculado al PRAE institucional y orientado a fortalecer la conciencia, responsabilidad y participación ambiental de la comunidad educativa.<br><br>
            El proyecto involucra a estudiantes y docentes de la básica secundaria y media como líderes y agentes de cambio, capaces de promover acciones que contribuyan al cuidado y conservación del entorno. A través de actividades como la siembra de árboles, creación de semilleros, huerta escolar, compostaje, reciclaje y reutilización, los estudiantes llevan el aprendizaje ambiental de las aulas a la práctica.<br><br>
            Sembradores de Vida integra diferentes áreas del conocimiento y busca involucrar a toda la comunidad educativa, promoviendo valores como el respeto por la naturaleza, el consumo responsable, la protección de la biodiversidad y el cuidado de los espacios comunes.<br><br>
            <em>Sembramos conciencia, cultivamos conocimiento y construimos juntos un futuro más sostenible.</em>
        `,
        instagram: "@sembradoresdevidaacademico",
        linkIg: "https://www.instagram.com/sembradoresdevidaacademico?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==",
        fotos: ["img/sembradores1.jpg", "img/sembradores2.jpg", "img/sembradores3.jpg", "img/sembradores4.jpg"]
    },
    banda: {
        titulo: "Banda Filarmónica Institucional",
        descripcion: `
            Fundada en el año 1950, la Banda Filarmónica del Colegio Académico representa el alma artística, musical y cultural de nuestra institución y de Guadalajara de Buga.<br><br>
            Este proyecto fomenta la disciplina, la sensibilidad artística y el talento instrumental en niños y jóvenes, consolidándose como un baluarte histórico en desfiles patrios, encuentros departamentales y solemnes eventos cívicos y religiosos que exaltan con orgullo el nombre de nuestro colegio.<br><br>
            <em>Tradición, música y talento que trascienden generaciones.</em>
        `,
        instagram: "Tradición y Cultura",
        linkIg: "#",
        fotos: ["img/banda1.jpg", "img/banda2.jpg", "img/banda3.jpg", "img/banda4.jpg"]
    }
};

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    const bodyTab = document.getElementById('tab-body');
    const imgElement = document.getElementById('tab-image');

    bodyTab.style.opacity = 0;
    imgElement.style.opacity = 0;

    setTimeout(() => {
        bodyTab.innerHTML = datosTabs[tabName].texto;
        imgElement.src = datosTabs[tabName].imagen;
        
        bodyTab.style.opacity = 1;
        imgElement.style.opacity = 1;
    }, 200);
}

function verDetalleProyecto(clave) {
    const p = detallesProyectos[clave];
    const bodyTab = document.getElementById('tab-body');

    bodyTab.style.opacity = 0;

    setTimeout(() => {
        bodyTab.innerHTML = `
            <div style="text-align: left;">
                <button onclick="switchTab('proyectos')" style="background: #e2e8f0; border: none; padding: 0.4rem 0.9rem; border-radius: 6px; font-weight: 600; cursor: pointer; margin-bottom: 1rem; color: #334155; display: inline-flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-arrow-left"></i> Volver a proyectos
                </button>
                
                <h3 style="color: var(--color-primary); font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.5rem;">${p.titulo}</h3>
                <div style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 1.2rem;">${p.descripcion}</div>
                
                ${p.instagram !== "Tradición y Cultura" ? `
                    <div style="margin-bottom: 1.2rem;">
                        <a href="${p.linkIg}" target="_blank" style="color: #E1306C; font-weight: 600; text-decoration: none; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 6px; background: #fff1f2; padding: 6px 12px; border-radius: 20px; border: 1px solid #fecdd3;">
                            <i class="fa-brands fa-instagram" style="font-size: 1.1rem;"></i> Instagram: ${p.instagram}
                        </a>
                    </div>
                ` : ''}

                <h4 style="font-size: 1rem; color: #1e293b; margin-bottom: 0.6rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px;">Galería Fotográfica</h4>
                
                <!-- Cuadrícula profesional de 4 fotos -->
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                    <img src="${p.fotos[0]}" alt="Foto 1" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                    <img src="${p.fotos[1]}" alt="Foto 2" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                    <img src="${p.fotos[2]}" alt="Foto 3" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                    <img src="${p.fotos[3]}" alt="Foto 4" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;">
                </div>
            </div>
        `;
        bodyTab.style.opacity = 1;
    }, 200);
}