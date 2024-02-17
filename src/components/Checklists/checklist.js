import CardsFooter from "components/Footers/CardsFooter";
import ChecklistHeroSection from "components/Headers/ChecklistHeroSection";

import DemoNavbar from "components/Navbars/DemoNavbar";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

const Checklist = ({ initialItems, description, title }) => {
  const [items, setItems] = useState(initialItems || []);
  const [newItem, setNewItem] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Extract unique categories from the initialItems array
    const uniqueCategories = [
      ...new Set(initialItems.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, [initialItems]);
  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "" && newItemCategory.trim() !== "") {
      const newItemObject = {
        name: newItem,
        category: newItemCategory,
        checked: false,
      };
      setItems([...items, newItemObject]);
      setNewItem("");
      setNewItemCategory("");
      if (!categories.includes(newItemCategory)) {
        setCategories([...categories, newItemCategory]);
      }
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <DemoNavbar />
      <ChecklistHeroSection title={title} description={description} />
      <section
        className="section section-components pb-0"
        id="checklist-section-components"
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <Row className="row-grid">
                {categories.map((category) => (
                  <div key={category} className="category-section">
                    <h3>{category}</h3>
                    <ul>
                      {items
                        .filter((item) => item.category === category)
                        .map((item, index) => (
                          <li key={index} className="custom-checkbox-container">
                            <input
                              className="custom-control-input"
                              type="checkbox"
                              id={`customCheck${index}${item.category}`}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`customCheck${index}${item.category}`}
                            >
                              <span>{item.name}</span>
                            </label>
                            <span
                              className="remove-icon"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
                <div className="add-item">
                  <input
                    type="text"
                    placeholder="Enter new item"
                    value={newItem}
                    onChange={handleNewItemChange}
                    className="add-input form-control"
                    id="add-new-item"
                  />
                  <UncontrolledDropdown direction="down">
                    <DropdownToggle caret color="primary" type="button">
                      {selectedCategory}
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="dropdownMenuButton"
                      className="add-item-dropdown"
                    >
                      {categories.map((category) => (
                        <DropdownItem
                          key={category}
                          value={category}
                          onClick={() => handleCategoryClick(category)}
                        >
                          {category}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <span className="add-icon" onClick={() => handleAddItem}>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </span>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <CardsFooter />
    </div>
  );
};

export default Checklist;
