import styled from '@emotion/styled'
import {useForm} from 'react-hook-form'
import CloudComputingIcon from './components/CloudComputingIcon'
import DownloadIcon from './components/DownloadIcon'
import DraftIcon from './components/DraftIcon'
import Input from './components/Input'
import Label from './components/Label'
import MyDocument from './components/MyDocument'
import Spacing from './components/Spacing'
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  background: linear-gradient(69.92deg, #1089BC 13.76%, #042330 140.51%);
  padding: 32px 61px 48px 26px;
`

const InputList = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
`

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
`

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: ${props => props.justifyContent};
`

const DragDropWrapper = styled.div`
  width: 242px;
  height: 137px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #F0E6E6;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 150px;
`

const DragDropText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #338EB4;
`

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 50px;
  margin-top: 150px;
`

const App = () => {
    const {register, handleSubmit, watch} = useForm()

    return (
        <Container>
            <InputList>
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
                    <Input {...register('shipperAddress')} width="178px" height="28px"/>
                </Row>
                <Row justifyContent="space-between">
                    <Label text="PO/PU"/>
                    <Input {...register('shipperPOPU')} width="178px" height="28px"/>
                </Row>
                <Spacing/>
                <Row justifyContent="space-between">
                    <Label text="Receiver"/>
                    <Input {...register('receiver')} width="178px" height="28px"/>
                </Row>
                <Row justifyContent="space-between">
                    <Label text="Address"/>
                    <Input {...register('receiverAddress')} width="178px" height="28px"/>
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
                <Column>
                    <Label text="Pick Up Comments"/>
                    <Input {...register('comments')} height="50px"/>
                </Column>
                <Spacing/>
                <DragDropWrapper>
                    <CloudComputingIcon/>
                    <DragDropText>
                        Drag and drop file
                    </DragDropText>
                </DragDropWrapper>
            </InputList>
            <PDFViewer width={805} height={1037} showToolbar={false} style={{border: 'none'}}>
                <MyDocument data={watch()}/>
            </PDFViewer>
            <InputList>
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
                <IconsWrapper>
                    <DraftIcon/>
                    <PDFDownloadLink document={<MyDocument data={watch()} />} fileName="test.pdf">
                        {({blob, url, loading, error}) =>
                            loading ? 'Loading document...' : <DownloadIcon/>
                        }
                    </PDFDownloadLink>
                </IconsWrapper>
            </InputList>
        </Container>
    );
}

export default App;
