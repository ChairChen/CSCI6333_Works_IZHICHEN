// Build a Photo Gallery Using a Public API with Pagination and Lazy Loading
// •	Fetch images from a public API
// •	Display images in a Bootstrap grid layout
// •	Show 6 images per page
// •	Include Previous / Next pagination buttons
// •	Implement lazy loading for images
// •	Handle loading and error states
// API Endpoint: https://picsum.photos/v2/list
// reference: https://react-bootstrap.netlify.app/docs/components/pagination/

import axios from "axios";
import { useEffect, useState } from "react";
import { useToast } from "../../context/ToastContext";
import { Card, Row, Col, Container, Pagination, Spinner } from "react-bootstrap";

const API_BASE_URL = 'https://picsum.photos/v2/list';
const API_IMAGE_URL = 'https://picsum.photos/id';
const MAX_PAGES = 29;
const ITEMS_PER_PAGE = 6;

export default function Gallery() {
    const { addToast } = useToast();
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            // setError(null);
            setImages([]);
            
            try {
                const response = await axios.get(
                    `${API_BASE_URL}?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
                );
                setImages(response.data);
            } catch (error) {
                console.error("Error fetching data", error);
                addToast(`Error fetching images: ${error.message}`, 'danger');
                // setError("Unable to load images, please check your internet or try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    }, [currentPage, addToast]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= MAX_PAGES) {
            setCurrentPage(pageNumber);
            console.log(`Fetching Page: ${pageNumber}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderPagination = () => {
        let items = [];
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(MAX_PAGES, currentPage + 2);
        // first page
        if (startPage > 1) {
            items.push(<Pagination.First onClick={() => handlePageChange(1)} />);
            items.push(<Pagination.Ellipsis />);
        }
        // middle page
        for (let number = startPage; number <= endPage; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => handlePageChange(number)}
                >
                    {number}
                </Pagination.Item>
            );
        }
        // last page
        if (endPage < MAX_PAGES) {
            items.push(<Pagination.Ellipsis />)
            items.push(<Pagination.Last onClick={() => handlePageChange(MAX_PAGES)} />)
        }
        return (
            <div className="d-flex justify-content-center my-4">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    /> 
                    {items}
                    <Pagination.Next
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === MAX_PAGES}
                    />
                </Pagination>
            </div>
        );
    };

    return (
        <Container>
            <h1 className="mb-4">Gallery Page (Pagination + Lazy Loading)</h1>
            
            {loading && (
                <div>
                    <Spinner animation="border" role="status" variant="primary" />
                    <p className="mt-2">Loading...</p>
                </div>
            )}
        
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            
            <Row xs={1} md={2} lg={3} className="g-4">
                {images.map(image => (
                    <Col key={image.id}>
                        <Card className="n-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={`${API_IMAGE_URL}/${image.id}/600/400`}
                                alt={`By ${image.author}`}
                                loading="lazy"
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title className="h6">{image.author}</Card.Title>
                                <Card.Text>
                                    ID: {image.id}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
            {renderPagination()}

        </Container>
    );
}