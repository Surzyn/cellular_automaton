export default function rule30(...prev) {
    if (prev[0] && !prev[1] && !prev[2]) {
        return true;
    }
    if (!prev[0] && prev[1] && prev[2]) {
        return true;
    }
    if (!prev[0] && prev[1] && !prev[2]) {
        return true;
    }
    if (!prev[0] && !prev[1] && prev[2]) {
        return true;
    }

    return false;
}
