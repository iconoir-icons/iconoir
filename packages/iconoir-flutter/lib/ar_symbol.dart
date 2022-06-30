import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArSymbol extends StatelessWidget {
  const ArSymbol({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/ArSymbol.svg');
}
