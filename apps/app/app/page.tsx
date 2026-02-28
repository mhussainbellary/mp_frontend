import Image from "next/image";
import { Button } from "@repo/atoms/button";


export default function Home() {
  return (
    <div >
      <main>
        <div>
          <h4 className="text-2xl font-bold mb-8 text-center mt-4">APP PAGE</h4>
           <Button appName="web" className={''}>
          Open alert
        </Button>
        </div>
      </main>

        
    </div>
  );
}
