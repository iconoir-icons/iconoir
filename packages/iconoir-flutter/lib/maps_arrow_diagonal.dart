import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MapsArrowDiagonal extends StatelessWidget {
  const MapsArrowDiagonal({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MapsArrowDiagonal.svg');
}
