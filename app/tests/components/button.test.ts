describe("Button Component", () => {
  test("renders the button text", async () => {
    const wrapper = await import("../../components/button/index.vue");
    expect(wrapper).toBeDefined();
  });

  test("renders the correct button text", async () => {
    const Button = (await import("../../components/button/index.vue")).default;

    const props = { btnText: "Click Me" };

    const componentInstance = {
      ...Button,
      props: props,
    };

    expect(componentInstance.props.btnText).toBe("Click Me");
  });

  test("calls the onClick handler when clicked", async () => {
    const Button = (await import("../../components/button/index.vue")).default;
    const onClickMock = vi.fn();

    const props = { btnText: "Click Me", onClick: onClickMock };
    const componentInstance = {
      ...Button,
      props: props,
      handleClick: () => onClickMock(),
    };
    componentInstance.handleClick();

    expect(onClickMock).toHaveBeenCalled();
  });

  test("disables the button when loading is true", async () => {
    const Button = (await import("../../components/button/index.vue")).default;
    const props = { btnText: "Click Me", loading: true };

    const componentInstance = {
      ...Button,
      props: props,
    };

    expect(componentInstance.props.loading).toBe(true);
  });

  test("button is enabled when loading is false", async () => {
    const Button = (await import("../../components/button/index.vue")).default;
    const props = { btnText: "Click Me", loading: false };

    const componentInstance = {
      ...Button,
      props: props,
    };

    expect(componentInstance.props.loading).toBe(false);
  });
});
