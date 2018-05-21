export function rule30(...prev) {
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

export function rule60(...prev) {
    if (prev[0] && !prev[1] && prev[2]) {
        return true;
    }
    if (prev[0] && !prev[1] && !prev[2]) {
        return true;
    }
    if (!prev[0] && prev[1] && prev[2]) {
        return true;
    }
    if (!prev[0] && prev[1] && !prev[2]) {
        return true;
    }

    return false;
}

export function rule90(...prev) {
    if (prev[0] && prev[1] && !prev[2]) {
        return true;
    }
    if (prev[0] && !prev[1] && !prev[2]) {
        return true;
    }
    if (!prev[0] && prev[1] && prev[2]) {
        return true;
    }
    if (!prev[0] && !prev[1] && prev[2]) {
        return true;
    }

    return false;
}
