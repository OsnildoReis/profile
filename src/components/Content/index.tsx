import { Container, Contents, } from "./styles";
import { Sections } from "../Sections";
import { Cards } from "../Cards";
import { BsListCheck, BsTelephone } from "react-icons/bs";
import { TbMessageCircle, TbMail } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineGlobal } from "react-icons/ai";


export function Content() {
    return (
        <Container>
            <Contents>
                <Sections id="about">
                    <div id="aboutCard" >
                        <h5 style={{ textAlign: "center" }} >SOBRE NÓS</h5>
                        <label style={{ color: "#19275D", fontSize: "1.3rem" }} >Dr. <strong>Osnildo Oliveira Reis</strong> é advogado, fundador do escritório digital <strong>Osnildo Reis Advocacia Especializada</strong>, inscrito na OAB/SP através do nº 475.409</label>
                        <p>Dr. Osnildo Reis é advogado especialista em Direito Trabalho e Processo do Trabalho, com atuação profissional no escritório digital <strong>OSNILDO REIS ADVOCACIA ESPECIALIZADA</strong>, também advogado parceiro de escritórios de advocacia localizados no Estado de São Paulo, Acre e Rondônia.</p>
                        <p>Em Cosmópolis/SP, atua como advogado parceiro do renomado escritório de advocacia Ateliê Jurídico do experiente advogado Dr. Edilson Elias Leite. Já no Acre, atua como advogado parceiro do escritório de advocacia Victor Andrade na cidade de Cruzeiro do Sul/AC. Por fim, em Rondônia, atua com parceira com o Dr. Luiz Fernando Torrejaes Romero, na cidade de Jaru/RO. </p>
                        <p>Dr. Osnildo, em 2022 fundou o renomado escritório digital <strong>OSNILDO REIS ADVOCACIA ESPECIALIZADA</strong>, para melhor atender os seus clientes, dando-lhes o conforto necessário para um atendimento de muita qualidade e humanizado onde não existe limites geográficos para sua atuação.</p>
                    </div>
                </Sections>
                <Sections id="atuacao" >
                    <div id="atuacaoTitle">
                        <h5>ATUAÇÃO</h5>
                        <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Nosso grande diferencial é o atendimento acolhedor</span>
                    </div>
                    <div id="atuacaoCards" >
                        <Cards>
                            <BsListCheck className="icon" />
                            <h2>Nossas áreas de atuação</h2>
                            <p>
                                O Escritório de advocacia é focado no atendimento de questões trabalhistas, indenizatórias, consumerista e benefícios previdenciários.
                            </p>
                        </Cards>
                        <Cards>
                            <TbMessageCircle className="icon" />
                            <h2>Atendimento diferenciado</h2>
                            <p>
                                Primeiramente, queremos ouvir o seu problema e depois disso, poder ajudar você a resolvê-lo.
                            </p>
                        </Cards>
                        <Cards>
                            <HiOutlineUserGroup className="icon" />
                            <h2>Atendimento flexível</h2>
                            <p>
                                A nossa estrutura é desenvolvida para poder te recepcionar da melhor maneira possível.
                            </p>
                        </Cards>
                        <Cards>
                            <AiOutlineGlobal className="icon" />
                            <h2>Estamos presentes nas redes sociais</h2>
                            <p>
                                Produzimos conteúdo, tudo a mostrar-lhe “nossa cara” e te dar às mãos para ouvir.
                            </p>
                        </Cards>

                    </div>
                </Sections>
                <Sections id="profile" >
                    <div id="profileTitle" >
                        <h5>ADVOGADO</h5>
                        <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Dr. Osnildo Oliveira Reis</span>
                    </div>
                    <div id="profileCard" >
                        <p style={{ fontSize: "2rem" }} >
                            Inscrito na OAB/SP através do nº 475.409
                        </p>
                        <p>
                            Dr. Osnildo é especialista em Direito do Trabalho e Processo do Trabalho. Graduado pelo UNASP – Centro Universitário Adventista de São Paulo campus Engenheiro Coelho no ano de 2020.
                        </p>
                        <p>
                            Além disso, é pós-graduando em Gestão de Pessoas Por Competência pelo Centro Universitário Adventista de Ensino.
                        </p>
                        <p>
                            Finalmente, Dr. Osnildo Reis atua de forma bastante especializada em ações trabalhistas e indenizatórias, tendo sido contratado por clientes de todo Brasil ao desde que iniciou suas atividades na advocacia especializada.
                        </p>
                        <p>
                            <a href="mailto:advogadoosnildo.reis@gmail.com">advogadoosnildo.reis@gmail.com</a>
                        </p>
                    </div>
                </Sections>
                <Sections id="contact" >
                    <div id="contactTitle"  >
                        <h5>O ESCRITORIO</h5>
                        <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Localização e Contato</span>
                    </div>
                    <div id="contactCards" >
                        <Cards bg="rgba(0,0,0,0.02)">
                            <BsTelephone className="icon" />
                            <h5>Telefones</h5>
                            <p>(19) 99702-1486</p>
                        </Cards>
                        <Cards bg="rgba(0,0,0,0.02)">
                            <TbMail className="icon" />
                            <h5>Email</h5>
                            <p>advogadoosnildo.reis@gmail.com</p>
                        </Cards>
                        <Cards bg="rgba(0,0,0,0.02)" >
                            <AiOutlineGlobal className="icon" />
                            <h5>REDES SOCIAIS</h5>
                            <p>advogadoosnildo.reis</p>
                        </Cards>
                    </div>
                </Sections>
            </Contents>
        </Container>
    );
}
