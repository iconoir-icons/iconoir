import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VrSymbol extends StatelessWidget {
  const VrSymbol({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/VrSymbol.svg');
}
