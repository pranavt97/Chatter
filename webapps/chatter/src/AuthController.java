import javax.servlet.*;
import javax.servlet.http.*;

public class AuthController extends HTTPServlet
{
	public void doGet(HttpServletRequest req, HttpServletResponse res)
	throws IOExeption, ServletExeption
	{
		req.setAttribute("error", false);
		RequestDispatcher view = req.getRequestDispatcher("/index.jsp");
		view.forward(req,res);
	}

	public void doPost(HttpServletRequest req, HttpServletResponse res)
	throws IOExeption, ServletExeption
	{
		String name = req.getParameter("username");
		String pass = req.getParameter("password");
		UserModel user = UserModel.authuser(name, pass);
		RequestDispatcher view;
		
		if(user != null)
		{
			req.setAttribute("user", user);

			//Add user ID for future Auth
			Cookie userID = new Cookie("UserID", user.getID());
			userID.setMaxAge(60*60*24);
			res.addCookie(userID);

			view = req.getRequestDispatcher("/List.jsp");

		}
		else
		{
			//No user resend to index.html
			req.setAttribute("error", true);
			view = req.getRequestDispatcher("/index.jsp");
		}
		view.forward(req,res);
	}
}