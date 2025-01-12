export async function GET(req, { params }) {
  try {
    const { id } = params;

    const users = [
      {
        id: 1,
        username: "testuser",
        email: "testuser@example.com",
        password: "password123",
      },
      {
        id: 2,
        username: "anotheruser",
        email: "anotheruser@example.com",
        password: "password456",
      },
    ];

    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
