import Accordion from "react-bootstrap/Accordion";
import Form from 'react-bootstrap/Form';
function MainBodyleft() {
  return (
    <>
    <div 
style={{
    fontWeight: "lighter",
    fontFamily: "Palatino, 'Palatino Linotype', 'Book Antiqua', serif",
}}  
    >
      <div className=" hidden min-[1168px]:block sticky top-12 bg-white w-80 p-3">
        <Accordion className="flex flex-col gap-2">
          <Accordion.Item eventKey="0" className="!border-0 !border-b !border-gray-400">
            <Accordion.Header className="tracking-wider pb-3">
              AVAILABILITY
            </Accordion.Header>
            <Accordion.Body >
              <p>In stock only</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="!border-0 !border-b !border-gray-400">
            <Accordion.Header className="tracking-wider pb-3">
              PRICE
            </Accordion.Header>
            <Accordion.Body>
              <Form.Label>GIVE PRICE </Form.Label>
              <Form.Range />
                <p className="text-center">RS : 0 to RS : 49900</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="!border-0 !border-b !border-gray-400">
            <Accordion.Header className="ftracking-wider pb-3">
              PRODUCT TYPE
            </Accordion.Header>
            <Accordion.Body>SHAWLS (4)</Accordion.Body>
          </Accordion.Item>
          {/* 4th one  */}
          <Accordion.Item eventKey="3" className="!border-0 !border-b !border-gray-400">
            <Accordion.Header className="tracking-wider pb-3">
              FABRIC
            </Accordion.Header>
            <Accordion.Body>VELVET (4)</Accordion.Body>
          </Accordion.Item>
          {/* 5th one  */}
          <Accordion.Item eventKey="5" className="!border-0 !border-b !border-gray-400">
            <Accordion.Header className="tracking-wider bg-white pb-3">
              PIECE
            </Accordion.Header>
            <Accordion.Body>1 PIECE (4)</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
    </>
  );
}
export default MainBodyleft;
