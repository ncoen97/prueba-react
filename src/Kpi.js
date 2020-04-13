import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PeopleIcon from '@material-ui/icons/People'
import { Card, CardContent, Typography, Paper, Box, Grid } from '@material-ui/core'

const style = {
    root: {
        width: 250,
        height: 98
    },
    content:{
        display: 'flex',
        alignItems: "center",
        padding: 0
    },
    mainValue:{
        flex: 1,
        //backgroundColor:"#5A6E4E",
        alignItems: "center",
        padding: 0
    },
    details:{
        flex:1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        //transform: "translate(0vh,-2vh)"
        //backgroundColor:"#5AF14E"
    },
    icon:{
        height: 50,
        width: 50
    }
}

function Kpi(props) {
    const data = {
        mainValue: 30,
        unit: "%",
        classDescription: "Llenado del aula",
        secondaryDescription: "15 alumnos"
    }
    const { classes } = props
    
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.mainValue}>
                    <Box display="flex" flexDirection="column">
                        <Box  display="flex" flexDirection="row" alignItems="flex-end" justifyContent="center">
                            <Box fontSize="h3.fontSize" fontWeight={500}>
                                {data.mainValue}
                            </Box>
                            <Box paddingBottom={2}>
                                {data.unit}
                            </Box>                    
                        </Box>
                        <Box fontSize={13} alignSelf="center">
                            Valor actual
                        </Box>
                    </Box>
                </div>
                <div className={classes.details}>
                    <PeopleIcon style={{fontSize: "2em",backgroundColor: "#166CD2", color: "white", padding:13}}/>
                    <Box fontSize="h8">
                        {data.classDescription}
                    </Box>
                    <Box fontSize={11}>
                        {data.secondaryDescription}
                    </Box>
                </div>
            </CardContent>
            <div style={{backgroundColor:"#00CD00", height:"1vh"}}/>
        </Card>
    )
}
export default withStyles(style)(Kpi)

