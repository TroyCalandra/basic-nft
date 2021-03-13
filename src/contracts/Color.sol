pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Color is ERC721 {
    string[] public colors;
    mapping(string => bool) _colorExists;

    constructor() ERC721("Color", "COLOR") public {

    }

    // E.G. color = #FFFFFF
    function mint(string memory _color) public {
        require(!_colorExists[_color]);
        colors.push(_color);
        _mint(msg.sender, colors.length);
        _colorExists[_color] = true;
    }
}