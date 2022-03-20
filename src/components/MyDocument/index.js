import {Page, Text, View, Document, StyleSheet, Font} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingLeft: 35,
        paddingRight: 35,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
});

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const MyDocument = ({ data }) => {
    const {
        amount,
        carrier,
        cod,
        comments,
        deliveryDate,
        deliveryTime,
        equipment,
        name,
        pallets,
        pickUpDate,
        pickUpTime,
        receiver,
        receiverAddress,
        shipper,
        shipperAddress,
        shipperPOPU,
        receiverPOPU,
        temperature,
        weight
    } = data
    return (
        <Document>
            <Page size="A3" style={styles.body}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{...styles.text, fontWeight: 'bold'}}>CARRIER RATE CONFIRMATION</Text>
                    <Text style={{...styles.text, fontWeight: 'bold'}}>LOAD NUMBER: {cod ? `COD${cod}` : ''}</Text>
                </View>
                <Text style={{...styles.text, textAlign: 'center', fontWeight: 'bold'}}>
                    AMERICAN EAGLE TRANS INC
                </Text>
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'flex-start'}}>
                    <Text style={styles.text}>Bill to:</Text>
                    <View>
                        <Text style={{...styles.text, margin: 0}}>AMERICAN EAGLE TRANS INC</Text>
                        <Text style={{...styles.text, margin: 0}}>13243 CONSTABLE AVE GRANADA</Text>
                        <Text style={{...styles.text, margin: 0}}>HILLS CA 91344</Text>
                        <Text style={{...styles.text, margin: 0}}>PHONE: 213-378-1033</Text>
                        <Text style={{...styles.text, margin: 0}}>EMAIL:</Text>
                        <Text style={{...styles.text, margin: 0}}>AMEAGLETRAMSINC@GMAIL.COM</Text>
                    </View>
                    <Text style={styles.text}>OWNER OPERATOR AGREEMENT</Text>
                </View>
                <Text style={{height: '1px', border: '1px solid black'}}/>
                <View style={{
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                }}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.text, margin: 0}}>Carrier:</Text>
                        <Text style={{...styles.text, margin: 0}}>{carrier}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.text, margin: 0}}>Driver:</Text>
                        <Text style={{...styles.text, margin: 0}}>{name}</Text>
                    </View>
                </View>
                <View style={{
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                }}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.text, margin: 0}}>Phone:</Text>
                        <Text style={{...styles.text, margin: 0}}></Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.text, margin: 0}}>MC:</Text>
                        <Text style={{...styles.text, margin: 0}}></Text>
                    </View>
                </View>
                <View style={{
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                }}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...styles.text, margin: 0}}>Email:</Text>
                        <Text style={{...styles.text, margin: 0}}></Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '10px'}}>
                        <Text style={{...styles.text, margin: 0}}>TONY</Text>
                    </View>
                </View>
                <Text style={{height: '1px', border: '1px solid black'}}/>
                <View style={{marginLeft: '30px'}}>
                    <View style={{
                        width: '62%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Weight:</Text>
                            <Text style={{...styles.text, margin: 0}}>{weight}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Equipment:</Text>
                            <Text style={{...styles.text, margin: 0}}>{equipment}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '58%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Pallets:</Text>
                            <Text style={{...styles.text, margin: 0}}>{pallets}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Temp:</Text>
                            <Text style={{...styles.text, margin: 0}}>{temperature}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{height: '1px', border: '1px solid black', marginTop: '20px'}}/>
                <View style={{marginLeft: '30px'}}>
                    <View style={{
                        width: '63%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>SHIPPER:</Text>
                            <Text style={{...styles.text, margin: 0}}>{shipper}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Pick up Date:</Text>
                            <Text style={{...styles.text, margin: 0}}>{pickUpDate}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '63.5%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Address:</Text>
                            <Text style={{...styles.text, margin: 0}}>{shipperAddress}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Pick up Time:</Text>
                            <Text style={{...styles.text, margin: 0}}>{pickUpTime}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '62%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>PO:</Text>
                            <Text style={{...styles.text, margin: 0}}>{shipperPOPU}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{height: '1px', border: '1px solid black', marginTop: '20px'}}/>
                <View style={{marginLeft: '30px'}}>
                    <View style={{
                        width: '68%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>RECEIVER:</Text>
                            <Text style={{...styles.text, margin: 0}}>{receiver}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Delivery Due Date:</Text>
                            <Text style={{...styles.text, margin: 0}}>{deliveryDate}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '65%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Address:</Text>
                            <Text style={{
                                ...styles.text,
                                margin: 0,
                                wordBreak: 'break-all',
                                overflowWrap: 'break-word'
                            }}>{receiverAddress}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>Delivery Time:</Text>
                            <Text style={{...styles.text, margin: 0}}>{deliveryTime}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '62%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '10px'
                    }}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{...styles.text, margin: 0}}>PO:</Text>
                            <Text style={{...styles.text, margin: 0}}>{receiverPOPU}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{height: '1px', border: '1px solid black', marginTop: '20px'}}/>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{...styles.text, margin: 0}}>Payment Method:</Text>
                    <Text style={{...styles.text, margin: 0}}>EFS / QUICK PAY</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px'}}>
                    <Text style={{...styles.text, margin: 0}}>Amount:</Text>
                    <Text style={{...styles.text, margin: 0}}>{amount}</Text>
                </View>
                <Text style={{height: '1px', border: '1px solid black', marginTop: '20px'}}/>
                <Text style={styles.text}>Instructions</Text>
                <Text style={styles.text}>- CLEAN, DRY, ODOR FREE, NO HOLES</Text>
                <Text style={styles.text}>- MUST HAVE LOAD BARS OR STRAPS</Text>
                <Text style={styles.text}>- DRIVER MUST HAVE 53' REEFER IF THE SHIPMENT IS TEMP CONTROLLED</Text>
                <Text style={styles.text}>- IF THE LOAD IS REEFER, MUST BE PRECOOLED PRIOR TO ARRIVAL</Text>
                <Text style={styles.text}>- DRIVER IS RESPONSIBLE FOR MAKING SURE THE PRODUCT IS SECURED PRIOR TO
                    LEAVING THE SHIPPER OR RECEIVERS</Text>
            </Page>
        </Document>
    );
};


export default MyDocument
