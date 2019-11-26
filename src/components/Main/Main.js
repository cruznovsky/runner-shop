import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './Main.css';

class Main extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <main className={styles.Main}>
                <Container>
                    <Row>
                        <Col xl='3' sm='12'>
                            <aside>
                                <div className={styles.SortMenu}>
                                    <h4 className={styles.SortMenuHeader}>Sortuj:</h4>
                                    <ul className={styles.SortMenuOptions}>
                                        <li className={styles.SortMenuOption}>Nazwa A-Z</li>
                                        <li className={styles.SortMenuOption}>Nazwa Z-A</li>
                                        <li className={styles.SortMenuOption}>Cena rosnąco</li>
                                        <li className={styles.SortMenuOption}>Cena malejąco</li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col xl='9' sm='12'>Sekcja z produktami</Col>
                    </Row>
                </Container>
            </main>
        )
    }
}

export default Main;