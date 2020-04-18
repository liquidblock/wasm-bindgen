use wasm_bindgen::prelude::*;
use wasm_bindgen_test::*;
use web_sys::Element;
use web_sys::SvgsvgElement;

#[wasm_bindgen(module = "/tests/wasm/element.js")]
extern "C" {
    fn new_svg() -> SvgsvgElement;
}

#[wasm_bindgen_test]
fn element_class_attribute() {
    let svg = new_svg();

    // test class list
    assert_eq!(
        svg.get_attribute("class"),
        None,
        "Shouldn't have the class attribute"
    );
    svg.set_attribute("class", "test");
    assert_eq!(
        svg.get_attribute("class"),
        Some(String::from("test")),
        "Should have the class attribute set"
    );
}

#[wasm_bindgen_test]
fn element_class_list() {
    let svg = new_svg();

    // test class list
    assert_eq!(
        svg.class_list().value(),
        "",
        "Shouldn't have a class_list value"
    );
    svg.class_list().set_value("test");
    assert_eq!(
        svg.class_list().value(),
        "test",
        "Should have a class_list value"
    );
}

#[wasm_bindgen_test]
fn svgelement_class_name() {
    let svg = new_svg();

    // test class_name
    assert_eq!(
        svg.class_name().base_val(),
        "",
        "Shouldn't have a class_name"
    );
    svg.class_name().set_base_val("test");
    assert_eq!(
        svg.class_name().base_val(),
        "test",
        "Should have a class_name"
    );
}

#[wasm_bindgen_test]
fn element_set_class_name() {
    // test set_class_name on Element
    let svg = new_svg();
    let element: &Element = &svg;
    element.set_class_name("test"); // using Element::set_class_name instead of SvgElement::class_name
    assert_eq!(
        element.get_attribute("class"), // test using the class attribute
        Some(String::from("test")),
        "Should have a class_name"
    );
}

#[wasm_bindgen_test]
fn element_get_class_name() {
    // test class_name on Element
    let svg = new_svg();
    let element: &Element = &svg;
    svg.set_attribute("class", "test"); // test using the class attribute
    assert_eq!(
        element.class_name(), // using Element::class_name instead of SvgElement::class_name
        "test",
        "Should have a class_name"
    );
}
