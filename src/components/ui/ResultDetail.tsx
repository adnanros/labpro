import { CCard, CCol, CContainer, CRow } from "@coreui/react";
import React from "react";
import {ProgressbarSt} from "./ProgressbarSt";

const ResultDetail: React.FC = () => {
    
    return(
        <CContainer>
            <CCard>
                <CRow>
                    <CCol sm={3}>
                        <img src="../../Assets/images/icon-benzene.png" alt="" />

                    </CCol>
                    <CCol sm={9}>
                        <CRow>
                            <CCol sm={10}>
                                <h1>Arsenic</h1>
                                <h3>Heavy Metals</h3>
                            </CCol>
                            <CCol sm={2}>
                                <button>Prev</button>
                                <button>Next</button>
                            </CCol>
                        </CRow>
                        <CRow>
                            <ProgressbarSt width={200} height={20} standard={3.1} amount={2.2}/>
                        </CRow>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol sm={3}>
                        <div>Standard</div>
                        <div>2.1 PPM</div>
                    </CCol>
                    <CCol sm={9}>
                        <div>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eum, aliquid perspiciatis explicabo fuga magnam totam doloribus! Corrupti recusandae ut eaque ea. Ullam sequi minus excepturi hic perspiciatis accusamus est cum quod ipsum assumenda laudantium quia ex quae ab laboriosam cumque a ipsa dolore omnis nesciunt vitae asperiores vero, fugiat explicabo. Veniam, praesentium alias sequi odio itaque at vero iure ea labore asperiores dignissimos voluptas aperiam tempora dolore reiciendis amet atque. Magnam quas possimus neque placeat deserunt officia, autem sit iusto consectetur, quia sint provident id blanditiis ratione quod libero unde ipsa maxime ullam sequi. Sunt eveniet eius sint impedit dolorum repellendus maiores tempore, voluptate, ut deserunt quisquam laudantium suscipit iusto, eos sit voluptates in? Consequuntur repudiandae inventore exercitationem itaque distinctio dolor sint a dolorum nobis excepturi delectus earum aut odio, amet iste accusantium atque voluptatem eveniet fugiat tenetur mollitia illum laborum fugit ipsa. Facere voluptate odit voluptatibus minima alias laudantium ullam sit aliquam voluptates soluta repellat eum, similique tempora veritatis sint deserunt, cum molestiae consequuntur expedita nostrum dicta impedit eligendi minus vitae. Aliquid quia vel rerum vero quae ad modi repellendus, saepe libero itaque odio quod facere odit, debitis fugit veniam corrupti quisquam minus! Enim necessitatibus vero commodi fugiat veniam officiis incidunt. Accusantium delectus tempora deserunt quibusdam animi, nulla iste, reiciendis itaque impedit accusamus repellendus ea magni dolore repellat velit aperiam ut iure, ipsum quidem magnam sapiente laboriosam excepturi hic? Exercitationem illum, labore, esse suscipit delectus asperiores officia dolor, consequuntur tenetur perspiciatis harum beatae rerum fuga voluptatum. Quae, enim magni? Alias deleniti molestiae, aperiam mollitia odit praesentium rem blanditiis reprehenderit nihil sint aliquid vero, corporis doloribus sequi totam similique dignissimos suscipit. Ullam, vel. Dolores est, quod quam voluptates et nesciunt itaque optio in enim esse minus dolor alias incidunt 
                            eveniet dolore velit sapiente rem placeat 
                            dolorum ullam natus omnis cupiditate.
                        </div>
                        <h2>Imact-Category</h2>
                        <h3>Imacts</h3>
                        <div>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eum, aliquid perspiciatis explicabo fuga magnam totam doloribus! Corrupti recusandae ut eaque ea. Ullam sequi minus excepturi hic perspiciatis accusamus est cum quod ipsum assumenda laudantium quia ex quae ab laboriosam cumque a ipsa dolore omnis nesciunt vitae asperiores vero, fugiat explicabo. Veniam, praesentium alias sequi odio itaque at vero iure ea labore asperiores dignissimos voluptas aperiam tempora dolore reiciendis amet atque. Magnam quas possimus neque placeat deserunt officia, autem sit iusto consectetur, quia sint provident id blanditiis ratione quod libero unde ipsa maxime ullam sequi. Sunt eveniet eius sint impedit dolorum repellendus maiores tempore, voluptate, ut deserunt quisquam laudantium suscipit iusto, eos sit voluptates in? Consequuntur repudiandae inventore exercitationem itaque distinctio dolor sint a dolorum nobis excepturi delectus earum aut odio, amet iste accusantium atque voluptatem eveniet fugiat tenetur mollitia illum laborum fugit ipsa. Facere voluptate odit voluptatibus minima alias laudantium ullam sit aliquam voluptates soluta repellat eum, similique tempora veritatis sint deserunt, cum molestiae consequuntur expedita nostrum dicta impedit eligendi minus vitae. Aliquid quia vel rerum vero quae ad modi repellendus, saepe libero itaque odio quod facere odit, debitis fugit veniam corrupti quisquam minus! Enim necessitatibus vero commodi fugiat veniam officiis incidunt. Accusantium delectus tempora deserunt quibusdam animi, nulla iste, reiciendis itaque impedit accusamus repellendus ea magni dolore repellat velit aperiam ut iure, ipsum quidem magnam sapiente laboriosam excepturi hic? Exercitationem illum, labore, esse suscipit delectus asperiores officia dolor, consequuntur tenetur perspiciatis harum beatae rerum fuga voluptatum. Quae, enim magni? Alias deleniti molestiae, aperiam mollitia odit praesentium rem blanditiis reprehenderit nihil sint aliquid vero, corporis doloribus sequi totam similique dignissimos suscipit. Ullam, vel. Dolores est, quod quam voluptates et nesciunt itaque optio in enim esse minus dolor alias incidunt 
                            eveniet dolore velit sapiente rem placeat 
                            dolorum ullam natus omnis cupiditate.
                        </div>
                    </CCol>
                </CRow>
            

            </CCard>
        </CContainer>
        
    );
    
}

export default ResultDetail;