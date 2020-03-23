import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import profile from '../../data/profile';
import styles from './ProjectTabPanel.module.css';
import Carousel from 'react-material-ui-carousel'

class ProjectTabPanel extends Component {
    constructor(props) {
        super(props);
        this.setRaised = this.setRaised.bind(this);
        this.removeRaised = this.removeRaised.bind(this);
        this.state = {
            raised: ''
        }
    }

    setRaised = (event) => {
        this.setState({ raised: event.target.getAttribute('title') })
    };

    removeRaised = () => {
        this.setState({ raised: '' })
    };

    render() {
        // const assetsPath = require.context('../../img', false, /\.(png|jpe?g|svg)$/);
        return (
            <div className={styles.projectPanel}>
                <Grid justify="center" alignItems="center" container spacing={40}>
                    {profile.Projects.map((project, i) => {
                        return (
                            <Grid item key={project.Name + i} sm={9} md={9} lg={9}>
                                <div onMouseOver={this.setRaised} onMouseOut={this.removeRaised} identifier={project.Name}>
                                    <Card title={project.Name} raised={this.state.raised === project.Name}>
                                        <Carousel>
                                            {
                                                project.ScreenShotURL.map((image, index) => {
                                                    return (
                                                        <img
                                                        className={styles.protfileImage}
                                                        alt={image.alt}
                                                        src={image.url}
                                                        key ={index} />
                                                    )
                                                })
                                            }
                                        </Carousel>
                                        <CardContent title={project.Name}>
                                            <Typography className={styles.projectName} gutterBottom variant="h4" component="h2">
                                                {project.Name}
                                            </Typography>
                                            <Typography className={styles.projectDescription}>
                                                {project.Description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className={styles.openDetailActionPanel} title={project.Name}>
                                            <Button className={styles.openDetail} variant="contained" size="large" color="primary" onClick={() => window.open(project.ProjectLink)}>
                                                View Detail
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

export default ProjectTabPanel