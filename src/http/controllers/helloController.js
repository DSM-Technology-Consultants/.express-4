"use strict";

class HelloController {

  name = "Hello"

  hello = (req, res) => {
    res.json({ "code": res.statusCode, "message": `Hello ${req.params.name}`, "params": req.params });
  }

}

export default HelloController;
