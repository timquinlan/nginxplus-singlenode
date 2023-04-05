function cr(r) {
    var testval = 0;
    if (testval == 1) {
            let newloc="/redirected"
	    r.internalRedirect(newloc);
	    return;
    } else {
	    r.return(200, "njs\n");
            return;
    }
}

export default {cr};
