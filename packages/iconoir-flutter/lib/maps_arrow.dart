import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MapsArrow extends StatelessWidget {
  const MapsArrow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MapsArrow.svg');
}
