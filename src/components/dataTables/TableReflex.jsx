import React from 'react'
import { Container, Table } from 'react-bootstrap'
import styled from 'styled-components'



import ImageTab1 from '../../assets/images/reflex-n-small.jpg'
import ImageTab2 from '../../assets/images/reflex-g-small.png'
import ImageTab3 from '../../assets/images/reflex-g.png'
import ImageTab4 from '../../assets/images/reflex_de_500.jpg'
import ImageTab5 from '../../assets/images/reflex_de_1000.jpg'


const TableReflex = () => {

      /* const data = useStaticQuery(graphql`
      query ProductsQuery  {
        allProductsJson (filter: {name: {in: "manyTank"}}) {
          edges {
            node {
              alt
              button
              name
              link
              img1 {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
              img2 {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          
        }
      }
    `) */


    return (
        <div>
            <TableSetting>
               <Container>
                  <Table id="table" responsive striped bordered>
                      <thead>
                        <tr>
                          <th>Model / Объем, л</th>
                          <th>Цена (руб.)</th>
                          <th>Диаметр, мм</th>
                          <th>Высота, мм</th>
                          <th>Подкл. дюйм</th>
                          <th>Вес, кг</th>
                          <th>P, бар</th>
                          {/* <th>Мембрана</th> */}
                          <td ><b>Фото</b></td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td colSpan="8" ><p>Расширительные баки Reflex N</p></td>
                        </tr>

                        <tr>
                          <td>Reflex N200</td>
                          <td><b>14 720 руб.</b></td>
                          <td>634</td>
                          <td>760</td>
                          <td>1</td>
                          <td>36.7</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="8" ><br></br><img src={ImageTab1} alt="Reflex N 1000" width="250px" /></td>
                        </tr>
                        <tr>
                          <td>Reflex N250</td>
                          <td><b>21 390 руб.</b></td>
                          <td>634</td>
                          <td>890</td>
                          <td>1</td>
                          <td>45</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex N300</td>
                          <td><b>25 185 руб.</b></td>
                          <td>634</td>
                          <td>1060</td>
                          <td>1</td>
                          <td>52</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex N400</td>
                          <td><b>28 405 руб.</b></td>
                          <td>740</td>
                          <td>1070</td>
                          <td>1</td>
                          <td>65</td>
                          <td>6</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex N500</td>
                          <td><b>33 695 руб.</b></td>
                          <td>740</td>
                          <td>1290</td>
                          <td>1</td>
                          <td>79</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex N600</td>
                          <td><b>49 220 руб.</b></td>
                          <td>740</td>
                          <td>1530</td>
                          <td>1</td>
                          <td>85</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        
                        <tr >
                          <td>Reflex N800</td>
                          <td><b>58 420 руб.</b></td>
                          <td>740</td>
                          <td>1995</td>
                          <td>1</td>
                          <td>103</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                         
                          
                        </tr>
                        <tr>
                          <td>Reflex N1000</td>
                          <td><b>128 000 руб.</b></td>
                          <td>740</td>
                          <td>2410</td>
                          <td>1</td>
                          <td>120</td>
                          <td>6</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                      </tbody>
                      </Table>
                      <Table responsive striped bordered>
                      <tbody>
                        <tr>
                        <td colSpan="8" ><p>Расширительные баки Reflex G (сменная мембрана)</p></td>
                        </tr>
                        <tr>
                          <td>Reflex G200</td>
                          <td><b>77 395 руб.</b></td>
                          <td>634</td>
                          <td>972</td>
                          <td>1 1/4</td>
                          <td>33.4</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="6" ><img src={ImageTab2} alt="Reflex G 1000" width="250px" /></td>
                        </tr>
                        <tr>
                          <td>Reflex G300</td>
                          <td><b>102 810 руб.</b></td>
                          <td>634</td>
                          <td>1273</td>
                          <td>1 1/4</td>
                          <td>34.6</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G400</td>
                          <td><b>147 200 руб.</b></td>
                          <td>740</td>
                          <td>1245</td>
                          <td>1 1/4</td>
                          <td>51</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G500</td>
                          <td><b>169 855 руб.</b></td>
                          <td>740</td>
                          <td>1475</td>
                          <td>1 1/4</td>
                          <td>57.1</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G600</td>
                          <td><b>209 880 руб.</b></td>
                          <td>740</td>
                          <td>1859</td>
                          <td>1 1/2</td>
                          <td>118</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>

                        <tr >
                          <td>Reflex G800</td>
                          <td><b>238 590 руб.</b></td>
                          <td>740</td>
                          <td>2324</td>
                          <td>1 1/2</td>
                          <td>166</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          
                          
                        </tr>
                        <tr>
                          <td>Reflex G1000</td>
                          <td><b>272 690 руб.</b></td>
                          <td>740</td>
                          <td>2604</td>
                          <td>1 1/2</td>
                          <td>174</td>
                          <td>10</td>
                          <td rowSpan="5"> <br></br><img src={ImageTab3} alt="Reflex G 2000" width="250px"/><p></p></td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G2000</td>
                          <td><b>615 450 руб.</b></td> 
                          <td>1200</td>
                          <td>2451</td>
                          <td>2</td>
                          <td>485</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G3000</td>
                          <td><b>909 700 руб.</b></td> 
                          <td>1500</td>
                          <td>2532</td>
                          <td>2</td>
                          <td>830</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G4000</td>
                          <td><b>981 200 руб.</b></td> 
                          <td>1500</td>
                          <td>3107</td>
                          <td>2</td>
                          <td>1064</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G5000</td>
                          <td><b>1 052 700 руб.</b></td> 
                          <td>1500</td>
                          <td>3642</td>
                          <td>2 1/2</td>
                          <td>1274</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                      </tbody>
                      </Table>
                      <Table responsive striped bordered>
                      <tbody>                      
                        <tr>
                        <td colSpan="8" ><p>Расширительные баки Reflex DE (сменная мембрана)</p></td>
                        </tr>
                        <tr>
                          <td>Reflex DE200</td>
                          <td><b>23 230 руб.</b></td>
                          <td>634</td>
                          <td>967</td>
                          <td>1 1/4</td>
                          <td>36.5</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="6" ><img src={ImageTab4} alt="Reflex DE 1000" width="250px" /></td>
                        </tr>
                        <tr>
                          <td>Reflex DE300</td>
                          <td><b>26 105 руб.</b></td>
                          <td>634</td>
                          <td>1267</td>
                          <td>1 1/4</td>
                          <td>41.5</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex DE400</td>
                          <td><b>33 925 руб.</b></td>
                          <td>740</td>
                          <td>1245</td>
                          <td>1 1/4</td>
                          <td>73</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex DE500</td>
                          <td><b>40 825 руб.</b></td>
                          <td>740</td>
                          <td>1475</td>
                          <td>1 1/4</td>
                          <td>103</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G600</td>
                          <td><b>89 320 руб.</b></td>
                          <td>740</td>
                          <td>1859</td>
                          <td>1 1/2</td>
                          <td>128</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>

                        <tr >
                          <td>Reflex DE800</td>
                          <td><b>116 050 руб.</b></td>
                          <td>740</td>
                          <td>2324</td>
                          <td>1 1/2</td>
                          <td>176</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          
                          
                        </tr>
                        <tr>
                          <td>Reflex DE1000</td>
                          <td><b>128 590 руб.</b></td>
                          <td>740</td>
                          <td>2604</td>
                          <td>1 1/2</td>
                          <td>214</td>
                          <td>10</td>
                          <td rowSpan="5"> <br></br><img src={ImageTab5} alt="Reflex DE 2000" width="250px"/><p></p></td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex DE2000</td>
                          <td><b>534 380 руб.</b></td> 
                          <td>1200</td>
                          <td>2451</td>
                          <td>2</td>
                          <td>717</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex DE3000</td>
                          <td><b>846 890 руб.</b></td> 
                          <td>1500</td>
                          <td>2532</td>
                          <td>2</td>
                          <td>962</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex DE4000</td>
                          <td><b>952 600 руб.</b></td> 
                          <td>1500</td>
                          <td>3107</td>
                          <td>2</td>
                          <td>1085</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>Reflex G5000</td>
                          <td><b>1 177 000 руб.</b></td> 
                          <td>1500</td>
                          <td>3642</td>
                          <td>2 1/2</td>
                          <td>1050</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        
                      </tbody>
                  </Table>
                  <Table id="table2" responsive striped bordered>
                      <tbody>
                        <tr>
                        <td colSpan="8" ><p>Мембраны для баков Reflex</p></td>
                        </tr>
                     
                        <tr>
                        <td colSpan="2" ><p></p></td>
                        </tr>
                        <tr >
                          <td>Мембрана для бака, Reflex, G 200/DE 200</td>
                          <td><b>12 800 руб.</b></td>
                        </tr>
                        <tr >
                          <td>Мембрана для бака G 300/G 400/G 500/DE 300/DE 400/DE 500</td>
                          <td><b>28 000 руб.</b></td>
                        </tr>
                        <tr>
                          <td>Мембрана для бака G 800</td>
                          <td><b>72 960 руб.</b></td>
                        </tr>
                        <tr >
                          <td>Мембрана для бака G 1000 740 мм</td>
                          <td><b>75 600 руб.</b></td>
                        </tr>
                        <tr>
                          <td>Мембрана для бака G1000 1000 мм/G 1500</td>
                          <td><b>118 200 руб.</b></td> 
                          
                        </tr>
                        <tr>
                          <td>Мембрана для бака G 2000</td>
                          <td><b>140 400 руб.</b></td> 
                          
                        </tr>
                        <tr>
                          <td>Мембрана для бака VG/VF 1000 1000 мм/GG/GF 1000/RG/RF 1000</td>
                          <td><b>124 320 руб.</b></td> 
                          
                        </tr>
                        
                        <tr>
                          <td>Мембрана для бака VG/VF 1500/GG/GF 1500/RG/RF 1500</td>
                          <td><b>188 760 руб.</b></td> 
                          
                        </tr>
                        
                        
                      </tbody>
                  </Table>
                </Container>
            </TableSetting>
            
        </div>
    )
}

export default TableReflex


const TableSetting = styled.div`
    white-space: nowrap;
    
    text-align: center;
`