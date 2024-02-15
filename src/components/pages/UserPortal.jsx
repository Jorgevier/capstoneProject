import Button from "react-bootstrap/Button"
import HomeButton from "../HomeButton"
export default function UserPortal() {
    return (
        <>
            <div className="mainOverly"></div>
            <div className="demo" ></div>
            <HomeButton/>
            <div className="demoPage">
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg">
                        See favorite Restaurants
                    </Button>
                    <Button variant="secondary" size="lg">
                        Update user info
                    </Button>
                </div>
            </div >
        </>
    );
}


