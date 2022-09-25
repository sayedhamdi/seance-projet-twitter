import { useEffect, useState } from "react"
import { Card,Button,Title } from "react-bootstrap"

export default function Profile(){
    const [fullname,setFullname] = useState("")
    const [bio,setBio] = useState("")
    const [facebookLink,setFacebooLink] = useState("http://facebook.com/")
    // "CDM + CDU"  => componentDidMount + didUpdate
   
    useEffect(()=>{
       
    },[] )// dependency array vide CDM
    useEffect(()=>{
       
    } )// CDM + CDU 
    
    useEffect(()=>{
        //code here will execute only when fullname changes
    
    },[fullname,bio] )//
    return(

        <div style={{display:"flex"}}>
            <div style={{border:"1px solid orange",width:'50%',background:'turquoise'}}>
                <div>
                    <label>fullname</label>
                    <br></br>
                    <input type="text" onChange={(e)=>{
                        setFullname(e.target.value)
                    }}/>
                </div>
                <div>
                    <label>Bio</label>
                    <br></br>
                    <textarea onChange={(e)=>setBio(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label>facebook link</label>
                    <br></br>
                    <input type="text" onChange={(e)=>setFacebooLink(e.target.value)}/>
                </div>
            </div>
            <Card style={{width:'50%',background:'wheat'}}>
            <Card.Body>
                <Card.Title>
                    {fullname}
                </Card.Title>
                <Card.Text>
                {bio}
                </Card.Text>
                <Button variant="primary">
                    <a 
                        style={{textDecoration:'none',color:'white'}} 
                        href={facebookLink}>
                            Go to facebook
                    </a>
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}