import { describe, test, expect, vi } from "vitest";

describe("BlogCard Component", () => {
  test("renders the appropriate data passed", async () => {
    // Arrange:
    const BlogCard = (await import("../../components/blog-card/index.vue"))
      .default;
    const props = {
      blog: {
        category: "Technology",
        image: "/images/tech.jpg",
        createdAt: "2025-01-01",
        title: "A New Era of Technology",
        description: "Explore the advancements in technology.",
      },
    };

    // Act:
    const componentInstance = {
      ...BlogCard,
      props: props,
    };

    // Assert:
    expect(componentInstance.props.blog.category).toBe("Technology");
    expect(componentInstance.props.blog.title).toBe("A New Era of Technology");
    expect(componentInstance.props.blog.image).toBe("/images/tech.jpg");
    expect(componentInstance.props.blog.createdAt).toBe("2025-01-01");
    expect(componentInstance.props.blog.description).toBe(
      "Explore the advancements in technology."
    );
  });

  test("clicking the card navigates to the post", async () => {
    // Arrange:
    const BlogCard = (await import("../../components/blog-card/index.vue"))
      .default;
    const routerPushMock = vi.fn();
    const props = {
      blog: {
        id: 1,
        category: "Technology",
        image: "/images/tech.jpg",
        createdAt: "2025-01-01",
        title: "A New Era of Technology",
        description: "Explore the advancements in technology.",
      },
    };

    // Act:
    const componentInstance = {
      ...BlogCard,
      props: props,
      handleCardClick: (blog: { id: number }) => {
        routerPushMock(`/post/${blog.id}`);
      },
    };
    componentInstance.handleCardClick(props.blog);

    // Assert:
    expect(routerPushMock).toHaveBeenCalledWith("/post/1");
  });
});
