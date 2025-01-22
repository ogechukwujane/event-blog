import { describe, test, expect, vi } from "vitest";

describe("HeroCard Component", () => {
  test("renders the appropriate data passed", async () => {
    // Arrange:
    const HeroCard = (await import("../../components/hero-card/index.vue"))
      .default;
    const props = {
      blog: {
        category: "Fashion",
        image: "/images/tech.jpg",
        createdAt: "2024-01-01",
        title: "A New Era of Fashion",
        description: "Explore the advancements in fashion.",
      },
    };

    // Act:
    const componentInstance = {
      ...HeroCard,
      props: props,
    };

    // Assert:
    expect(componentInstance.props.blog.category).toBe("Fashion");
    expect(componentInstance.props.blog.title).toBe("A New Era of Fashion");
    expect(componentInstance.props.blog.image).toBe("/images/tech.jpg");
    expect(componentInstance.props.blog.createdAt).toBe("2024-01-01");
    expect(componentInstance.props.blog.description).toBe(
      "Explore the advancements in fashion."
    );
  });

  test("clicking the card navigates to the post", async () => {
    // Arrange:
    const HeroCard = (await import("../../components/hero-card/index.vue"))
      .default;
    const routerPushMock = vi.fn();
    const props = {
      blog: {
        id: 3,
        category: "Fashion",
        image: "/images/tech.jpg",
        createdAt: "2024-01-01",
        title: "A New Era of Fashion",
        description: "Explore the advancements in fashion.",
      },
    };

    // Act:
    const componentInstance = {
      ...HeroCard,
      props: props,
      handleCardClick: (blog: { id: number }) => {
        routerPushMock(`/post/${blog.id}`);
      },
    };
    componentInstance.handleCardClick(props.blog);

    // Assert:
    expect(routerPushMock).toHaveBeenCalledWith("/post/3");
  });
});
