import axios from 'axios';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Document, Page, pdfjs} from 'react-pdf';
import CloudComputingIcon from '../icons/CloudComputingIcon';
import DownloadIcon from '../icons/DownloadIcon';
import DraftIcon from '../icons/DraftIcon';
import RefreshIcon from '../icons/RefreshIcon';
import Input from '../Input';
import Label from '../Label';
import Spacing from '../Spacing';
import TextArea from '../TextArea';
import {Container, Column, DragDropText, DragDropWrapper, IconsWrapper, InputList, Sidebar, Row} from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PDFForm = () => {
    const {register, watch} = useForm()
    const [file, setFile] = useState(null)

    const fetchFile = async () => {
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/pdf`, watch())
        setFile(data)
    }

    const downloadPDF = (data) => {
        const base64ToArrayBuffer = (data) => {
            const bString = window.atob(data)
            const bLength = bString.length
            const bytes = new Uint8Array(bLength)
            for (let i = 0; i < bLength; i++) {
                const ascii = bString.charCodeAt(i)
                bytes[i] = ascii
            }
            return bytes
        }

        const bufferArray = base64ToArrayBuffer(data)
        const blobStore = new Blob([bufferArray], {type: 'application/pdf'})
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blobStore)
            return;
        }
        const objectURL = window.URL.createObjectURL(blobStore);
        const link = document.createElement('a')
        document.body.appendChild(link);
        link.href = objectURL
        link.download = 'file.pdf'
        link.click()
        window.URL.revokeObjectURL(data)
        link.remove()
    }

    useEffect(() => {
        fetchFile()
    }, [])

    return (
        <Container>
            <Sidebar>
                <InputList width={280}>
                    <Column>
                        <Label text="Carrier"/>
                        <Input {...register('carrier')} width="100%" height="50px"/>
                    </Column>
                    <Row justifyContent="end">
                        <Label text="Weight"/>
                        <Input {...register('weight')} width="90px" height="28px"/>
                    </Row>
                    <Row justifyContent="end">
                        <Label text="Pallets"/>
                        <Input {...register('pallets')} width="90px" height="28px"/>
                    </Row>
                    <Row justifyContent="space-between">
                        <Label text="Shipper"/>
                        <Input {...register('shipper')} width="178px" height="28px"/>
                    </Row>
                    <Row justifyContent="space-between">
                        <Label text="Address"/>
                        <TextArea {...register('shipperAddress')} width="178px" maxLength={34}/>
                    </Row>
                    <Row justifyContent="space-between">
                        <Label text="PO/PU"/>
                        <TextArea {...register('shipperPOPU')} width="178px" maxLength={34}/>
                    </Row>
                    <Spacing/>
                    <Row justifyContent="space-between">
                        <Label text="Receiver"/>
                        <Input {...register('receiver')} width="178px" height="28px"/>
                    </Row>
                    <Row justifyContent="space-between">
                        <Label text="Address"/>
                        <TextArea {...register('receiverAddress')} width="178px" maxLength={34}/>
                    </Row>
                    <Row justifyContent="space-between">
                        <Label text="PO/PU"/>
                        <Input {...register('receiverPOPU')} width="178px" height="28px"/>
                    </Row>
                    <Column alignItems="end">
                        <div>
                            <Label text="Amount"/>
                            <Input {...register('amount')} width="178px" height="28px"/>
                        </div>
                    </Column>
                </InputList>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    rowGap: '20px',
                }}>
                    <Column>
                        <Label text="Pick Up Comments"/>
                        <Input {...register('comments')} height="50px"/>
                    </Column>
                    <DragDropWrapper>
                        <CloudComputingIcon/>
                        <DragDropText>
                            Drag and drop file
                        </DragDropText>
                    </DragDropWrapper>
                </div>
            </Sidebar>
            <Document file={`data:application/pdf;base64,${file}`}>
                <Page pageNumber={1} height={869}/>
            </Document>
            <Sidebar>
                <InputList width={178}>
                    <Column>
                        <Label text="COD"/>
                        <Input {...register('cod')} width="187px" height="43px"/>
                    </Column>
                    <Column>
                        <Label text="Name"/>
                        <Input {...register('name')} width="187px" height="28px"/>
                    </Column>
                    <Column>
                        <Label text="Equipment"/>
                        <Input {...register('equipment')} width="187px" height="28px"/>
                    </Column>
                    <Column>
                        <Label text="Temperature"/>
                        <Input {...register('temperature')} width="187px" height="28px"/>
                    </Column>
                    <Column>
                        <Label text="Pick up Date"/>
                        <Input {...register('pickUpDate')} width="187px" height="28px"/>
                    </Column>
                    <Column>
                        <Label text="Pick up Time"/>
                        <Input {...register('pickUpTime')} width="187px" height="28px"/>
                    </Column>
                    <Column>
                        <Label text="Delivery Date"/>
                        <Input {...register('deliveryDate')} width="187px" height="28px"/>
                    </Column>
                    <Column>
                        <Label text="Delivery Time"/>
                        <Input {...register('deliveryTime')} width="187px" height="28px"/>
                    </Column>
                </InputList>
                <IconsWrapper>
                    <div onClick={fetchFile}>
                        <RefreshIcon/>
                    </div>
                    <DraftIcon width={50} height={50} color="white"/>
                    <div onClick={() => downloadPDF(file)}>
                        <DownloadIcon/>
                    </div>
                </IconsWrapper>
            </Sidebar>
        </Container>
    )
}

export default PDFForm
