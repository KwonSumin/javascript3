import http.server

 

HTTPHandler = http.server.SimpleHTTPRequestHandler



httpd = http.server.HTTPServer(('0.0.0.0', 8010), HTTPHandler)

httpd.serve_forever()