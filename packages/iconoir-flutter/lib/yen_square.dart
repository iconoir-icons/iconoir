import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class YenSquare extends StatelessWidget {
  const YenSquare({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/YenSquare.svg');
}
