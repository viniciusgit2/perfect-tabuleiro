import Image from "next/image";
import { Inter } from "next/font/google";
import Subdivisao from '../../componentes/Subdivisao'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div >
      <Subdivisao/>
      <Subdivisao/><Subdivisao/><Subdivisao/><Subdivisao/><Subdivisao/><Subdivisao/><Subdivisao/><Subdivisao/>
    </div>
  
    
  );
}
