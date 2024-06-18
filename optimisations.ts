/**
 * 
 * 
 * I am thinking of producing layers as images or svgs so than i can draw them on screen
 * not drawing each entity individually.
 * 
 * 
 * 
 * // we need to have another static canvas for only painting the elements that are hatched,
 * and if we deactivate the hatch we are only deactivating that canvas rather than repainting the entire canvas
 * // that canvas will be lazy loaded meaning after drawing everything we can the draw it in a different thread at its
 * own time.
 */


/**
 * I have layers and layers have entities
 * When I query entities I query from all the entities to paint them
 * 
 * when I arrange them I have to use their ID
 * Mean on their creation the entity ID's should be based on the scene counter not on the layers count
 * 
 * 
 */