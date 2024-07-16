import { getServerSession } from "next-auth"
import { Appbar } from "../components/Appbar";
import { NEXT_AUTH } from "../libs/route";

export default async function(){
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        <Appbar/>
        UserComponent
        {JSON.stringify(session)}
    </div>
}