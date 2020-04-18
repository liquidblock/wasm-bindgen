use wasm_bindgen::prelude::*;
use wasm_bindgen_test::*;
use web_sys::Element;
use web_sys::SvgsvgElement;

#[wasm_bindgen(module = "/tests/wasm/element.js")]
extern "C" {
    fn new_svg() -> SvgsvgElement;
}

#[wasm_bindgen_test]
fn svg_element() {
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

    // test class_name on Element
    let svg = new_svg();
    let element: &Element = &svg;
    assert_eq!(element.class_name(), "", "Shouldn't have a class_name");
    element.set_class_name("test");
    assert_eq!(element.class_name(), "test", "Should have a class_name");
}
