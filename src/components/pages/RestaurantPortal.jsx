import Button from "react-bootstrap/Button"
import HomeButton from '../HomeButton'

export default function RestaurantPortal() {
    return (
        <>
            <div className="mainOverly"></div>
            <div className="demo" ></div>
            <HomeButton/>
            <div className="demoPage">
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg">
                        Checkout new reviews
                    </Button>
                    <Button variant="secondary" size="lg">
                        Send new event/menu BLAST!!!
                    </Button>
                    <Button variant="secondary" size="lg">
                        Update user info
                    </Button>
                </div>
            </div >
        </>
    );
}
