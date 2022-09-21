
def searchThing(search, query):
    results = []
    query=query.lower()
    q = query[0]
    for letter in query[1:]:
        q += letter
        res = matchThree(search, q)
        results.append(res)
    return results


def matchThree(search, query):
    answer = []
    for word in search:
        word=word.lower()
        if word[0:len(query)] == query:
            if len(answer) < 3:
                answer.append(word)
            elif word < max(answer):
                answer[answer.index(max(answer))] = word
    return answer


print(searchThing(["Mother", "mouSe", "Mousepad", "Mountain",
      "Morning", "moat", "mOurning", "mock"], "mOUse"))
