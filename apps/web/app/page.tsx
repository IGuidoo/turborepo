import { CardSmall, CardSmallContent, CardSmallDescription, CardSmallHeader, CardSmallTitle } from "@repo/ui/card";


export default function Home() {
  return (
    <div>
      <p>
        TEST
      </p>
      <CardSmall>
        <CardSmallContent>
          {/* <DienstenConsultancySVG /> */}
        </CardSmallContent>
        <CardSmallHeader>
          <CardSmallTitle>Consultancy</CardSmallTitle>
          <CardSmallDescription>Krijg persoonlijk advies en begeleiding om jouw digitale strategie naar een hoger niveau te tillen. </CardSmallDescription>
        </CardSmallHeader>
      </CardSmall>
    </div>
  );
}
