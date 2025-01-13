const soap = require('soap');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

// Definimos el WSDL
const wsdl = `
<definitions xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
             xmlns:tns="http://example.com/"
             xmlns:xsd="http://www.w3.org/2001/XMLSchema"
             xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/"
             name="SimpleService"
             targetNamespace="http://example.com/"
             xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">
    <wsdl:message name="HelloRequest">
        <wsdl:part name="name" type="xsd:string"/>
    </wsdl:message>
    <wsdl:message name="HelloResponse">
        <wsdl:part name="greeting" type="xsd:string"/>
    </wsdl:message>
    <wsdl:portType name="SimplePortType">
        <wsdl:operation name="Hello">
            <wsdl:input message="tns:HelloRequest"/>
            <wsdl:output message="tns:HelloResponse"/>
        </wsdl:operation>
    </wsdl:portType>
    <wsdl:binding name="SimpleBinding" type="tns:SimplePortType">
        <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
        <wsdl:operation name="Hello">
            <soap:operation soapAction="urn:#Hello"/>
            <wsdl:input>
                <soap:body use="literal"/>
            </wsdl:input>
            <wsdl:output>
                <soap:body use="literal"/>
            </wsdl:output>
        </wsdl:operation>
    </wsdl:binding>
    <wsdl:service name="SimpleService">
        <wsdl:port name="SimplePort" binding="tns:SimpleBinding">
            <soap:address location="http://localhost:3000/soap"/>
        </wsdl:port>
    </wsdl:service>
</definitions>
`;

// Implementamos la lógica del servicio
const service = {
    SimpleService: {
        SimplePort: {
            Hello: function(args) {
                return { greeting: `Hello, ${args.name}!` };
            }
        }
    }
};

// Creamos el servidor SOAP
soap.listen(app, '/soap', service, wsdl);

app.listen(port, () => {
    console.log(`Servidor SOAP escuchando en http://localhost:${port}/soap`);
});