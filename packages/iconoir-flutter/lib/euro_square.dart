import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EuroSquare extends StatelessWidget {
  const EuroSquare({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/EuroSquare.svg');
}
